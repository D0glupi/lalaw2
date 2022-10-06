input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(piscar)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    pisque = 1
})
input.onPinPressed(TouchPin.P2, function () {
    P2_bate = 1
    if (P2_bate == 1 && pisque == 1) {
        P2_points += 1
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # .
            . # . # .
            # # # # #
            `)
        basic.pause(1000)
        basic.showNumber(P1_points)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showNumber(P2_points)
        P2_bate = 0
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pisque = 0
    }
})
input.onPinPressed(TouchPin.P1, function () {
    P1_bate = 1
    if (P1_bate == 1 && pisque == 1) {
        P1_points += 1
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.pause(1000)
        basic.showNumber(P1_points)
        basic.showLeds(`
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.showNumber(P2_points)
        P1_bate = 0
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        pisque = 0
    }
})
let P1_bate = 0
let P1_points = 0
let P2_points = 0
let P2_bate = 0
let pisque = 0
let piscar = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    piscar = randint(1000, 3000)
    if (P1_points == 3) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            . # # # .
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            `)
        basic.showString("WINS")
        P1_points = 0
        P2_points = 0
    }
    if (P2_points == 3) {
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            # # # # #
            `)
        basic.showLeds(`
            # # # # #
            . # . # .
            . # . # .
            . # . # .
            # # # # #
            `)
        basic.showString("WINS")
        P1_points = 0
        P2_points = 0
    }
})
