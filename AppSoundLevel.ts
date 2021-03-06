class AppSoundLevel {
    constructor() {
        this.appIcon = images.createImage(`
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            . # # # .
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
             TaskManager.AppTasks = [function () {
                led.plotBarGraph(input.soundLevel(), 160);
            }];
        }
        else {
            this.mode = true;
             TaskManager.AppTasks = [function () {
                basic.showString(input.soundLevel().toString());
            }];
        }
    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { }
}
