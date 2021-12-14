// Handles I/O, launches apps, manages tasks
class TaskManager {
    static Init() {
        TaskManager.installedApps =
            [new AppWatch, new AppCompass, new AppForce,
            new AppGameRPS, new AppSoundLevel, new AppMusic,
            new AppTempSensor, new AppMagneticForce, new AppLights, 
            new AppGameAcidRain];

        TaskManager.selectedAppIndex = 0;
        TaskManager.AppTasks = [];
        TaskManager.SystemTasks = [];
    }

    static homeScreenControl: boolean;
    static selectedAppIndex: int8;
    static installedApps: any[];
    static AppTasks: any[];
    static SystemTasks: any[];

    // Run home screen app
    static HomeScreen() {
        TaskManager.AppTasks = []
        TaskManager.homeScreenControl = true;
        let icon: Image = TaskManager.installedApps[TaskManager.selectedAppIndex].appIcon;
        icon.showImage(0);
        led.fadeIn(100);
        control.waitMicros(200000)
        TaskManager.AppTasks = [function () { led.setBrightness(input.lightLevel() + 10); }]
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
            led.fadeOut(200);
            basic.clearScreen();
            TaskManager.installedApps[TaskManager.selectedAppIndex].RunApp();
        }
        else TaskManager.installedApps[TaskManager.selectedAppIndex].InputB();
    }

    // Reserved Input: Close running app
    static InputAB() {
        TaskManager.installedApps[TaskManager.selectedAppIndex].CloseApp();
        led.fadeOut(200);
        TaskManager.AppTasks = [];
        TaskManager.HomeScreen();
    }


    static Shake() {
        TaskManager.installedApps[TaskManager.selectedAppIndex].Shake();
    }
}
