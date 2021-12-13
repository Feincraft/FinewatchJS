// Add your code here
class AppMagneticForce {
    constructor() {
        this.appIcon = images.createImage(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `);
        this.mode = false;
        this.dimension = Dimension.X;
    }

    appIcon: Image;
    mode: boolean;
    dimension: int8;

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
                led.plotBarGraph(Math.abs(Math.trunc(input.magneticForce(this.dimension))), 1000)
            }];
        }
        else {
            this.mode = true;
             TaskManager.AppTasks = [function () {
                basic.showString(Math.trunc(input.magneticForce(this.dimension)).toString());
            }];
        }
    }
    InputB() {
        if (this.dimension == Dimension.X) this.dimension = Dimension.Y;
        if (this.dimension == Dimension.Y) this.dimension = Dimension.Z;
        if (this.dimension == Dimension.Z) this.dimension = Dimension.X;
        this.mode = !this.mode;
        this.InputA();
    }
    InputAB() {

    }
    Shake() { }
}
