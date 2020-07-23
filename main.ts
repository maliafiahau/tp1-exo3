let x = 0
let y = 0
basic.forever(function () {
    x = randint(0, 4)
    y = 0
    led.plot(x, y)
    while (y <= 4) {
        basic.pause(500)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
        led.plotBrightness(x, y - 1, 170)
        led.plotBrightness(x, y - 2, 85)
        led.unplot(x, y - 3)
    }
    led.plotBrightness(x, y - 1, 85)
    led.plotBrightness(x, y - 2, 0)
    basic.pause(500)
    led.unplot(x, 4)
})
