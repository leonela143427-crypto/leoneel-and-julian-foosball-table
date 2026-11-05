hummingbird.startHummingbird()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, 0)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 10)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.One, 20)
    basic.pause(100)
    hummingbird.setPositionServo(FourPort.One, 30)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 40)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 50)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 60)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 70)
    basic.pause(50)
    hummingbird.setPositionServo(FourPort.One, 80)
    basic.pause(50)
    if (hummingbird.getSensor(SensorType.Light, ThreePort.One) == 0) {
        hummingbird.setTriLED(
        TwoPort.One,
        100,
        100,
        100
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        100,
        100,
        100
        )
    } else if (hummingbird.getSensor(SensorType.Light, ThreePort.One) != 0) {
        hummingbird.setTriLED(
        TwoPort.One,
        0,
        0,
        0
        )
        hummingbird.setTriLED(
        TwoPort.Two,
        0,
        0,
        0
        )
    }
    hummingbird.setRotationServo(FourPort.Two, 100)
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.Two) > 30) {
        hummingbird.setLED(ThreePort.Two, 100)
        hummingbird.setLED(ThreePort.One, 0)
        hummingbird.setPositionServo(FourPort.Three, 0)
    } else if (hummingbird.getSensor(SensorType.Distance, ThreePort.Two) < 30) {
        hummingbird.setLED(ThreePort.One, 100)
        hummingbird.setLED(ThreePort.Two, 0)
        basic.pause(1000)
        hummingbird.setPositionServo(FourPort.Three, 90)
    }
})
