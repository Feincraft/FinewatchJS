/* Send device measurements via USB */
class ServiceMeasuringKit {
    constructor() { }

    RunService(i: FinewatchServices.MeasuringDevice) {
        if (i == FinewatchServices.MeasuringDevice.Magnetic) 
            serial.writeValue("Magnetic", input.magneticForce(Dimension.Strength))
        if (i == FinewatchServices.MeasuringDevice.Heading)
            serial.writeValue("Heading", input.compassHeading())
        if (i == FinewatchServices.MeasuringDevice.Temperature)
            serial.writeValue("Temperature", input.temperature())
        if (i == FinewatchServices.MeasuringDevice.Sound)
            serial.writeValue("Sound", input.soundLevel())
        if (i == FinewatchServices.MeasuringDevice.Light)
            serial.writeValue("Light", input.lightLevel())
        if (i == FinewatchServices.MeasuringDevice.RotationX)
            serial.writeValue("Rotation X", input.rotation(Rotation.Roll))
        if (i == FinewatchServices.MeasuringDevice.RotationY)
            serial.writeValue("Rotation Y", input.rotation(Rotation.Pitch))
        if (i == FinewatchServices.MeasuringDevice.Acceleration)
            serial.writeValue("Acceleration", input.acceleration(Dimension.Strength))
    }  
}

namespace FinewatchServices {
    export enum MeasuringDevice {
        //% block="Magnetic"
        
        Magnetic = 0,
        //% block="Heading"
        Heading,
        //% block="Temperature"
        Temperature,
        //% block="Sound"
        Sound,
        //% block="Light"
        Light,
        //% block="Rotation X"
        RotationX,
        //% block="Rotation Y"
        RotationY,
        //% block="Acceleration"
        Acceleration,
    }
}