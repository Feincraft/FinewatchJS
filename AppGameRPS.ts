class AppGameRPS {
    constructor() {
        this.appIcon = images.iconImage(IconNames.Scissors)
    }

    appIcon: Image;  

    RunApp() {
        led.fadeIn(100)
        basic.showIcon(IconNames.SmallSquare)
    }

    CloseApp() {
    }

    InputA() {

    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { 
        let rps = Math.randomRange(0, 2)
        // Rock
        if (rps == 0) basic.showIcon(IconNames.SmallSquare)
        // Paper
        if (rps == 1) basic.showIcon(IconNames.Square)
        // Scissors
        if (rps == 2) basic.showIcon(IconNames.Scissors)

    }
}