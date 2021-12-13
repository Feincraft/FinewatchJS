class AppManager {
    static Init() {
        AppManager.installedApps =
            [new AppWatch, new AppCompass, new AppForce,
            new AppRPS, new AppSoundLevel, new AppMusic,
            new AppTempSensor, new AppMagneticForce, new AppLights];

        AppManager.selectedAppIndex = 0;
        AppManager.AppTasks = []; 
        AppManager.SystemTasks = [];
    }

    static homeScreenControl: boolean;
    static selectedAppIndex: int8;
    static installedApps: any[];
    static AppTasks: any[];
    static SystemTasks: any[];

    static HomeScreen() {
        AppManager.AppTasks = []
        AppManager.homeScreenControl = true;
        let icon: Image = AppManager.installedApps[AppManager.selectedAppIndex].appIcon;
        icon.showImage(0);
        led.fadeIn(100);      
        control.waitMicros(200000)
        AppManager.AppTasks = [function () { led.setBrightness(input.lightLevel() + 10); }]
    }
    
    // Select app or pass input
    static InputA() {
        if (AppManager.homeScreenControl) {
            AppManager.selectedAppIndex++;
            if (AppManager.selectedAppIndex >= AppManager.installedApps.length)
                AppManager.selectedAppIndex = 0;
            led.fadeOut(100);
            AppManager.HomeScreen();
        }
        else AppManager.installedApps[AppManager.selectedAppIndex].InputA();
    }

    // Start app or pass input
    static InputB() {
        if (AppManager.homeScreenControl) {
            AppManager.homeScreenControl = false;
            led.fadeOut(200);
            basic.clearScreen();
            AppManager.installedApps[AppManager.selectedAppIndex].RunApp();
        }
        else AppManager.installedApps[AppManager.selectedAppIndex].InputB();
    }

    // Close running app 
    static InputAB() {
        AppManager.installedApps[AppManager.selectedAppIndex].CloseApp();
        led.fadeOut(200);
        AppManager.AppTasks = [];
        AppManager.HomeScreen();
    }

    static Shake() {
        AppManager.installedApps[AppManager.selectedAppIndex].Shake();
    }
}
