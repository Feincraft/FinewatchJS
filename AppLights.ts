class AppLights {
    constructor() {
        this.appIcon = images.createImage(`
            # . . . #
            # # . # #
            # # # # #
            . # # # .
            . # # # .
            `);
        this.mode = false;
        this.strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB);
        this.brightness = 5;
        this.color = 0;
        this.strip.setBrightness(255);
    }

    appIcon: Image;
    mode: boolean;
    strip: neopixel.Strip;
    brightness: int8;
    color: int32;

    RunApp() {
        led.plotAll();
        led.fadeIn(100);
        this.InputA();
    }

    CloseApp() {
    }

    InputA() {
        //if (this.brightness == 255) this.brightness = 5;
        //this.brightness += 50;
        //this.strip.setBrightness(this.brightness);
         TaskManager.AppTasks = [];
        this.strip.setPixelColor(0, NeoPixelColors.White);
        this.strip.setPixelColor(1, NeoPixelColors.White);
        this.strip.show();
    }
    InputB() {
        //if (this.color > NeoPixelColors.White) this.color = 0;
        //this.color += 100000;
         TaskManager.AppTasks = [ function () { 
            let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB);
            strip.setPixelColor(0, Xi++);
            strip.setPixelColor(1, Xi++);
            strip.show();
            Xi+=1000;
        }];
        //this.strip.setPixelColor(0, this.color);
        //this.strip.setPixelColor(1, this.color);
        //this.strip.show();
    }
    InputAB() {

    }
    Shake() { }
}

let Xi =0;