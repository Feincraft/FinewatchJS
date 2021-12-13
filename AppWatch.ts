class AppWatch {
    constructor() {
        this.hourOffset = 9;
        this.minuteOffset = 40;
        this.appIcon = images.createImage(`
        . # # # .
        # # . . #
        # . # . #
        # . . . #
        . # # # .`)
    }

    hourOffset: int8;
    minuteOffset: int8;
    appIcon: Image;

    Reset() {
        this.hourOffset = 0;
        this.minuteOffset = 0;
    }

    RunApp() {
        AppManager.AppTasks = [function () {
            // Calculate current time
            let ms = input.runningTime() + (this.hourOffset * 60 * 60 * 1000) + (this.minuteOffset * 60 * 1000);
            if (ms > 86400000) ms = ms - 86400000;
            let hours = Math.trunc(ms / 1000 / 60 / 60);
            let minutes = Math.trunc(ms / 1000 / 60) - hours * 60;
            let seconds = Math.trunc(ms / 1000) - hours * 60 * 60 - minutes * 60;

            let ampm = 0;
            if (hours > 11) ampm = 1
            if (hours > 12) hours -= 12
            if (hours == 24) ampm = 0;

            // Clear coords
            let x = 0;
            let y = 0;

            // Plot hours
            for (let i = 0; i < 12; i++) {
                if (i < hours) led.plot(x, y);
                else led.unplot(x, y);
                if (++x > 4) { x = 0; y++; };
            }

            // Plot AM:PM
            if (ampm == 1) led.plot(4, 3); 
            if (ampm == 0) led.unplot(4, 3);

            // Plot minutes
            let minSegments = Math.trunc(minutes / 10);
            for (let j = 0; j < 5; j++) {
                if (j < minSegments) led.plot(j, 4);
                else led.unplot(j, 4);
            }
        }]
        led.fadeIn(150);
    }

    CloseApp() {       
    }

    InputA() {
        if (this.hourOffset >= 23)
            this.hourOffset = 0;
        else this.hourOffset++;
    }
    InputB() {
        if (this.minuteOffset >= 50)
            this.minuteOffset = 0;
        else this.minuteOffset += 10;
    }
    InputAB() { }

    Shake() { }
}