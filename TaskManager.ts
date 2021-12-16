// Handles I/O, launches apps, manages tasks
class TaskManager {
    // Local variables
    static homeScreenControl: boolean;
    static selectedAppIndex: int8;
    static installedApps: any[];
    static AppTasks: any[];
    static ServiceTasks: any[];
    static currentAppTask: number = 0;
    static currentSystemTask: number = 0;
    static powerSavingMode: boolean = false;

    // Load apps to memory
    static Init() {
        // Enabling too many apps will result in compile error due to program size 
        TaskManager.installedApps =
            [
                /* ENABLE DEFAULT APPS */
                //new AppWatch(),
                //new AppCompass(),
                //new AppForce(),
                //new AppSoundLevel(), 
                //new AppMusic(),
                //new AppTempSensor(), 
                //new AppMagneticForce(), 
                //new AppGameRPS(),
                //new AppGameAcidRain(),
                //new AppGameMemory()
                
            ];

        TaskManager.selectedAppIndex = 0;
        TaskManager.AppTasks = [];
        TaskManager.ServiceTasks = []; 
        
        // Add background services
        TaskManager.ServiceTasks = [
            /* ENABLE DEFAULT SERVICES */
            // () => { new ServiceMeasuringKit().RunService() }
        ]

        // Init system events and inputs
        basic.forever(() => TaskManager.RunTasks())
        input.onButtonPressed(Button.B, () =>                   { TaskManager.InputB(); });
        input.onButtonPressed(Button.A, () =>                   { TaskManager.InputA();  });
        input.onButtonPressed(Button.AB, () =>                  {TaskManager.InputAB(); });
        input.onGesture(Gesture.Shake, () =>                    { TaskManager.Shake(); })
        input.onGesture(Gesture.TiltLeft, () =>                 { TaskManager.TiltLeft(); })
        input.onGesture(Gesture.TiltRight, () =>                { TaskManager.TiltRight(); })
        input.onGesture(Gesture.ScreenUp, () =>                 { TaskManager.ScreenUp(); })
        input.onGesture(Gesture.ScreenDown, () =>               { TaskManager.ScreenDown(); })
        input.onLogoEvent(TouchButtonEvent.Pressed, () =>       { TaskManager.LogoPress(); })
        input.onLogoEvent(TouchButtonEvent.LongPressed, () =>   { TaskManager.LogoLongPress(); })

        // TaskManager initializiation completed, starting home screen
        TaskManager.HomeScreen()
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
        if (TaskManager.ServiceTasks.length > 0) {
            TaskManager.ServiceTasks[TaskManager.currentSystemTask++]()
            if (TaskManager.currentSystemTask >= TaskManager.ServiceTasks.length) {
                TaskManager.currentSystemTask = 0;
            }
        }
    }

    // Run home screen app
    static HomeScreen() {
        TaskManager.AppTasks = []
        basic.clearScreen();
        TaskManager.homeScreenControl = true;
        if (TaskManager.installedApps.length > 0) 
        {
            let icon: Image = TaskManager.installedApps[TaskManager.selectedAppIndex].appIcon;
            icon.showImage(0);
        }
        TaskManager.AppTasks = [ function () { TaskManager.EnvironmentControl() } ]
    }

    // Control power output
    static EnvironmentControl() {
        led.setBrightness(input.lightLevel() + 20);       
    }

    // Select app or pass input
    static InputA() {
        if (TaskManager.installedApps.length == 0) return
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
        if (TaskManager.installedApps.length == 0) return
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
        if (TaskManager.installedApps.length == 0) return
        TaskManager.AppTasks = [];
        TaskManager.installedApps[TaskManager.selectedAppIndex].CloseApp();
        led.fadeOut(200);
        TaskManager.HomeScreen(); 
    }

    static Shake() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.Shake != undefined) i.Shake();
    }

    static TiltRight() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.TiltRight != undefined) i.TiltRight();
    }

    static TiltLeft() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.TiltLeft != undefined) i.TiltLeft();
    }

    static ScreenUp() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.ScreenUp != undefined) i.ScreenUp();

        // Exit power saving mode
        TaskManager.powerSavingMode = false;
    }

    static ScreenDown() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.ScreenDown != undefined) i.ScreenDown();

        // Enter power saving mode
        TaskManager.powerSavingMode = true;
    }

    static LogoPress() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.LogoPress != undefined) i.LogoPress();
    }

    static LogoLongPress() {
        if (TaskManager.installedApps.length == 0) return
        let i = TaskManager.installedApps[TaskManager.selectedAppIndex]
        if (i.LogoLongPress != undefined) i.LogoLongPress();
    }
}

TaskManager.Init()