input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        # . . . #
        . # # # .
        `)
    strip.showRainbow(1, 360)
    start = true
    lauf = input.runningTime()
})
function ledkreis () {
    strip.setPixelColor(23, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(25, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(26, neopixel.colors(NeoPixelColors.Black))
    strip.setPixelColor(24, neopixel.colors(NeoPixelColors.Black))
    zeit = ende - lauf
    led2 = Math.trunc(zeit / 1000)
    strip.show()
    for (let Index = 0; Index <= 23; Index++) {
        strip.setPixelColor(Index, neopixel.colors(NeoPixelColors.Red))
        basic.pause(950)
        strip.setPixelColor(Index - 1, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        led.toggle(2, 2)
        if (led2 == Index) {
            basic.showNumber(led2)
            basic.showString(".")
            basic.showNumber(zeit % 100)
            break;
        }
    }
}
input.onButtonPressed(Button.B, function () {
    start = false
    ende = input.runningTime()
    ledkreis()
})
let led2 = 0
let ende = 0
let zeit = 0
let lauf = 0
let start = false
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Square)
strip = neopixel.create(DigitalPin.P2, 26, NeoPixelMode.RGB)
strip.setBrightness(8)
