class AppTempSensor {
    constructor() {
        this.appIcon = images.createImage(`
            . . . . #
            . # # . .
            # . . . .
            # . . . .
            . # # . .
            `);
        this.mode = false;
    }

    appIcon: Image;
    mode: boolean;

    RunApp() {
        this.InputA();
        led.fadeIn(150);
    }

    CloseApp() {
    }

    InputA() {
        if (this.mode) {
            this.mode = false;
            AppManager.AppTasks = [function () {
                led.plotBarGraph(input.temperature(), 50);
            }];
        }
        else {
            this.mode = true;
            AppManager.AppTasks = [function () {
                basic.showString(input.temperature().toString());
            }];
        }
    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { }
}
