//% color=190 weight=500 icon="\uf121" block="Finewatch Apps"
namespace FinewatchApps {
    //% block
    export function addWatchApp(): void {
        TaskManager.installedApps.push(new AppWatch())
    }

    //% block
    export function addCompassApp(): void {
        TaskManager.installedApps.push(new AppCompass())
    }

    //% block
    export function addForceApp(): void {
        TaskManager.installedApps.push(new AppForce())
    }

    //% block
    export function addAcidRainGame(): void {
        TaskManager.installedApps.push(new AppGameAcidRain())
    }

    //% block
    export function addMemoryGame(): void {
        TaskManager.installedApps.push(new AppGameMemory())
    }

    //% block
    export function addRpsGame(): void {
        TaskManager.installedApps.push(new AppGameRPS())
    }

    //% block
    export function addMagneticForceApp(): void {
        TaskManager.installedApps.push(new AppMagneticForce())
    }

    //% block
    export function addMusicApp(): void {
        TaskManager.installedApps.push(new AppMusic())
    }

    //% block
    export function addSoundLevelApp(): void {
        TaskManager.installedApps.push(new AppSoundLevel())
    }

    //% block
    export function addTemperatureApp(): void {
        TaskManager.installedApps.push(new AppTempSensor())
    }
}