// Handles I/O, launches apps, manages tasks
class TaskManager {
    // Local variables
    static homeScreenControl: boolean;
    static selectedAppIndex: int8;
    static installedApps: any[];
    static AppTasks: any[];
    static SystemTasks: any[];
    static currentAppTask: number = 0;
    static currentSystemTask: number = 0;
    static powerSavingMode: boolean = false;

    // Load apps to memory
    static Init() {
        // Enabling too many apps will result in compile error due to program size 
        TaskManager.installedApps =
            [
                new AppWatch(), 
                //new AppCompass(), 
                //new AppForce(),
                new AppSoundLevel(), 
                //new AppMusic(),
                new AppTempSensor(), 
                new AppMagneticForce(), 
                new AppGameRPS(),
                new AppGameAcidRain()
            ];

        TaskManager.selectedAppIndex = 0;
        TaskManager.AppTasks = [];
        TaskManager.SystemTasks = [];
    }

    // Run app and system tasks
    static RunTasks() {
        // Forground app tasks
        if (TaskManager.AppTasks.length > 0) {   
            TaskManager.AppTasks[TaskManager.currentAppTask++]()
            if (TaskManager.currentAppTask >= TaskManager.AppTasks.length) {
                TaskManager.currentAppTask = 0; 
            }
        }

        // Background system tasks
        if (TaskManager.SystemTasks.length > 0) {
            TaskManager.SystemTasks[TaskManager.currentSystemTask++]()
            if (TaskManager.currentSystemTask >= TaskManager.SystemTasks.length) {
                TaskManager.currentSystemTask = 0;
            }
        }
    }

    // Run home screen app
    static HomeScreen() {
        TaskManager.AppTasks = []
        basic.clearScreen();
        TaskManager.homeScreenControl = true;
        let icon: Image = TaskManager.installedApps[TaskManager.selectedAppIndex].appIcon;
        icon.showImage(0);
        led.setBrightness(255);
        led.fadeIn(100);
        control.waitMicros(200000)
        TaskManager.AppTasks = [function () { TaskManager.EnvironmentControl() } ]
    }

    // Control power output
    static EnvironmentControl() {
        led.setBrightness(input.lightLevel() + 10);
    }

    // Select app or pass input
    static InputA() {
        if (TaskManager.homeScreenControl) {
            TaskManager.selectedAppIndex++;
            if (TaskManager.selectedAppIndex >= TaskManager.installedApps.length)
                TaskManager.selectedAppIndex = 0;
            led.fadeOut(100);
            TaskManager.HomeScreen();
        }
        else TaskManager.installedApps[TaskManager.selectedAppIndex].InputA();
    }

    // Start app or pass input
    static InputB() {
        if (TaskManager.homeScreenControl) {
            TaskManager.homeScreenControl = false;
            TaskManager.AppTasks = [];
            led.fadeOut(200);
            basic.clearScreen();
            TaskManager.installedApps[TaskManager.selectedAppIndex].RunApp();
        }
        else TaskManager.installedApps[TaskManager.selectedAppIndex].InputB();
    }

    // Reserved Input: Close running app
    static InputAB() {
        TaskManager.AppTasks = [];
        TaskManager.installedApps[TaskManager.selectedAppIndex].CloseApp();
        led.fadeOut(200);
        control.reset()
        // TaskManager.HomeScreen(); 
    }

    static Shake() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.Shake != undefined) i.Shake();
    }

    static TiltRight() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.TiltRight != undefined) i.TiltRight();
    }

    static TiltLeft() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.TiltLeft != undefined) i.TiltLeft();
    }

    static ScreenUp() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.ScreenUp != undefined) i.ScreenUp();

        // Exit power saving mode
        TaskManager.powerSavingMode = false;
    }

    static ScreenDown() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.ScreenDown != undefined) i.ScreenDown();

        // Enter power saving mode
        TaskManager.powerSavingMode = true;
    }

    static LogoPress() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.LogoPress != undefined) i.LogoPress();
    }

    static LogoLongPress() {
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.LogoLongPress != undefined) i.LogoLongPress();
    }
}
