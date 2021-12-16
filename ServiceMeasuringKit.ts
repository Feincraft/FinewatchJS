/* Send device measurements via USB */
class ServiceMeasuringKit {
    constructor() { }

    RunService() {
        serial.writeValue("Magnetic", input.magneticForce(Dimension.Strength))
        //serial.writeValue("Heading", input.compassHeading())
        serial.writeValue("Temperature", input.temperature())
        serial.writeValue("Sound", input.soundLevel())
        serial.writeValue("Light", input.lightLevel())
        //serial.writeValue("Rotaion X", input.rotation(Rotation.Roll))
        //serial.writeValue("Rotaion Y", input.rotation(Rotation.Pitch))
    }
}