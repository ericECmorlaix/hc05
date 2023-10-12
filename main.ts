serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    OLED.writeStringNewLine(serial.readLine())
})
input.onButtonPressed(Button.A, function () {
    serial.writeLine("AT")
    OLED.writeStringNewLine(serial.readString())
    basic.pause(1000)
    serial.writeLine("AT+NAME=myhc05")
    OLED.writeStringNewLine(serial.readString())
    basic.pause(1000)
    serial.writeLine("AT+PSWD=1234")
    basic.pause(1000)
    OLED.writeStringNewLine(serial.readString())
    basic.pause(1000)
    serial.writeLine("AT")
    OLED.writeStringNewLine(serial.readString())
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    serial.writeLine("Hello World !")
})
OLED.init(64, 158)
serial.redirect(
SerialPin.P8,
SerialPin.P12,
BaudRate.BaudRate38400
)
basic.forever(function () {
	
})
