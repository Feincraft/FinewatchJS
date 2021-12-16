class AppTemplate {
    constructor() {
        // Use custom icon
        this.appIcon = images.createImage(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        // Or use built-in icon
        //this.appIcon = images.iconImage(IconNames.Fabulous)
    }

    appIcon: Image;

    RunApp() {
        /* 
        Add your code home here.
        The code will be called in an endless loop until the application is closed.
        Don't include endless loops in your code, it will disrupt other background processes.
         

        Your app will start wil the screen cleared and all LED brightness set to 0.
        Use "led.fadeIn(100)" or "led.setBrightness(255)" to make LEDs visible.
        */
        led.fadeIn(100)
    }

    CloseApp() {
        /*
        This code is run just before your application is closed.
        If you are using the built-in game engine, you must run "control.reset()" when closing.
         */
        // control.reset();
    }

    /*
    Add code that runs on different device inputs 
    */
    InputA() {    }
    InputB() {    }
    Shake() {    }
    TiltRight() {   }
    TiltLeft() { } 
    ScreenUp() { }
    ScreenDown() { }
    LogoPress() { }
    LogoLongPress() { }
}