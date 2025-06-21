enum RadioMessage {
    message1 = 49434,
    gibmoney = 60841
}
let send_msg = 0
input.onButtonPressed(Button.A, function () {
    send_msg = 1
})
input.onButtonPressed(Button.B, function () {
    send_msg = 2
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("R U READY ")
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (send_msg == 1) {
        basic.showNumber(randint(1, 20))
    }
    if (send_msg == 2) {
        basic.showNumber(randint(1, 19))
    }
})
