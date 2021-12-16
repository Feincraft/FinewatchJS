//% color=100 weight=500 icon="\uf121" block="Finewatch Apps"
namespace FinewatchApps {
    //% block
    export function addWatchApp(): void {
        TaskManager.installedApps.push(new AppWatch())
        TaskManager.HomeScreen()
    }

    //% block
    export function addCompassApp(): void {
        TaskManager.installedApps.push(new AppCompass())
        TaskManager.HomeScreen()
    }

    //% block
    export function addForceApp(): void {
        TaskManager.installedApps.push(new AppForce())
        TaskManager.HomeScreen()
    }

    //% block
    export function addAcidRainGame(): void {
        TaskManager.installedApps.push(new AppGameAcidRain())
        TaskManager.HomeScreen()
    }

    //% block
    export function addMemoryGame(): void {
        TaskManager.installedApps.push(new AppGameMemory())
        TaskManager.HomeScreen()
    }

    //% block
    export function addRpsGame(): void {
        TaskManager.installedApps.push(new AppGameRPS())
        TaskManager.HomeScreen()
    }

    //% block
    export function addMagneticForceApp(): void {
        TaskManager.installedApps.push(new AppMagneticForce())
        TaskManager.HomeScreen()
    }

    //% block
    export function addMusicApp(): void {
        TaskManager.installedApps.push(new AppMusic())
        TaskManager.HomeScreen()
    }

    //% block
    export function addSoundLevelApp(): void {
        TaskManager.installedApps.push(new AppSoundLevel())
        TaskManager.HomeScreen()
    }

    //% block
    export function addTemperatureApp(): void {
        TaskManager.installedApps.push(new AppTempSensor())
        TaskManager.HomeScreen()
    }
}

//% color=180 weight=500 icon="\uf013" block="Finewatch Services"
namespace FinewatchServices {
    //% block
    export function addMeasuringKit(i: FinewatchServices.MeasuringDevice): void {
        TaskManager.ServiceTasks.push(() => { new ServiceMeasuringKit().RunService(i) })
    }
}