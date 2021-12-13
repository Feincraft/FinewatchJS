input.onButtonPressed(Button.B, function () {
    AppManager.InputB();
});

input.onButtonPressed(Button.A, function () {
    AppManager.InputA();
});

input.onButtonPressed(Button.AB, function () {
    AppManager.InputAB();
});


input.onGesture(Gesture.Shake, function () {
    AppManager.Shake();
})


basic.forever(function () {
    for (let x = 0; x < AppManager.AppTasks.length; x++) {
        AppManager.AppTasks[x]();
    } 
    for (let x = 0; x < AppManager.SystemTasks.length; x++) {
        AppManager.SystemTasks[x]();
    }
})


class AppCompass {
    constructor() {
        this.appIcon = images.createImage(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }

    appIcon: Image;

    RunApp() {
    }

    CloseApp() {
    }

    InputA() {

    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { }
}

class AppForce {
    constructor() {
        this.appIcon = images.createImage(`
            . . # # .
            . # . # .
            . # # # .
            . . . # .
            . # # . .
            `)
    }

    appIcon: Image;

    RunApp() {
    }

    CloseApp() {
    }

    InputA() {

    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { }
}
class AppRPS {
    constructor() {
        this.appIcon = images.createImage(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # # . # #
            `)
    }

    appIcon: Image;

    RunApp() {
    }

    CloseApp() {
    }

    InputA() {

    }
    InputB() {

    }
    InputAB() {

    }
    Shake() { }
}

AppManager.Init();
AppManager.HomeScreen();



