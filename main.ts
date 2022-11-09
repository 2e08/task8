input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
        music.playMelody("C5 B A G F E D C ", 181)
    }
    if (input.compassHeading() == 90) {
        basic.showString("E")
        music.playMelody("E B C5 A B G A F ", 237)
    }
    if (input.compassHeading() == 180) {
        basic.showString("S")
        music.playMelody("C D E F G A B C5 ", 300)
    }
    if (input.compassHeading() == 270) {
        basic.showString("W")
        music.playMelody("G B A G C5 B A B ", 248)
    }
})
