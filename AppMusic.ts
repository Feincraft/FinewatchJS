class AppMusic {
    constructor() {
        this.appIcon = images.createImage(`
            . . # # .
            . . # # #
            . . # . .
            # # # . .
            # # # . .
            `);
        this.selectedTrack = 0;
    }

    appIcon: Image;
    selectedTrack: int16;

    RunApp() {
        led.fadeIn(150);
        basic.showNumber(this.selectedTrack);
        music.startMelody(musicLibrary[this.selectedTrack], MelodyOptions.OnceInBackground);
    }

    CloseApp() {
    }

    InputA() {
        if (this.selectedTrack == (musicLibrary.length - 1))
            this.selectedTrack = 0;
        else this.selectedTrack++;

        this.RunApp();
    }

    InputB() {
        music.stopAllSounds();
    }
    InputAB() {

    }
    Shake() { }
}
