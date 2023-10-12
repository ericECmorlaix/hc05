serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    OLED.writeStringNewLine(serial.readLine())
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Hello World !")
})
OLED.init(64, 128)
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate9600
)
basic.forever(function () {
	
})
