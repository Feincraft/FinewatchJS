class AppGameMemory {
    constructor() {
        this.appIcon = images.createImage(`
            # . . . #
            # # . # #
            # . # . #
            # . . . #
            # . . . #
            `)

        this.obstacleBrightness = 255
        this.obstacles = []
        this.blinkers = 0
        this.scoreBonus = 0
        this.scoreEarned = 0
        this.difficulty = 5
        this.memoryTime = 2500000
    }

    appIcon: Image;

    scoreEarned: number
    scoreBonus: number
    player: game.LedSprite
    obstacles: game.LedSprite[]
    gameOver: boolean
    obstacleBrightness: number
    blinkers: number
    difficulty: number
    memoryTime: number

    ResetGame() {
        TaskManager.AppTasks = []
        basic.clearScreen()
        game.setScore(0)
        this.scoreBonus = 0
        this.scoreEarned = 0
        this.obstacleBrightness = 255
        this.obstacles = []
        this.blinkers = 0

        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                if (Math.trunc(Math.random() * this.difficulty) == 0) {
                    let sprite = game.createSprite(x, y)
                    sprite.setBrightness(255)
                    this.obstacles.push(sprite)
                    this.blinkers++
                    this.scoreBonus += 0.5
                }
            }
        }

        this.player = game.createSprite(0, 0)
        this.player.setBrightness(0)

        this.gameOver = false
        game.resume()

        control.waitMicros(this.memoryTime);
    }

    EndGame(won: boolean) {
        this.gameOver = true
        game.pause()

        for (let x = 0; x < this.obstacles.length; x++) {
            this.obstacles[x].delete()
        }
        this.player.delete()
        this.obstacles = []

        game.setScore(Math.round(this.scoreEarned + this.scoreBonus))
        if (won) TaskManager.AppTasks = [function () {
            basic.showString(game.score().toString())
        }]
        else basic.showIcon(IconNames.Sad)
    }

    GameLoop(instance: AppGameMemory) {
        if (instance.obstacleBrightness == 0) {
            TaskManager.AppTasks = []
            instance.player.setBrightness(255)
            return
        }

        instance.obstacleBrightness--
        for (let x = 0; x < instance.obstacles.length; x++) {
            instance.obstacles[x].setBrightness(instance.obstacleBrightness);
        }
        control.waitMicros(20);
    }

    RunApp() {
        led.fadeIn(100);
        this.ResetGame()
        TaskManager.AppTasks = [function () { this.GameLoop(this) }]
    }

    CloseApp() {
        control.reset();
    }

    InputA() {
        if (this.gameOver) {
            this.RunApp()
        } else {
            if (this.player.y() == 4 && this.player.x() == 4) {
                this.player.setY(0)
                this.player.setX(0)
            }
            else if (this.player.x() == 4) {
                this.player.changeYBy(1)
                this.player.setX(0)
            }
            else this.player.move(1)
        }
    }

    InputB() {
        let bCount = this.blinkers

        for (let x = 0; x < this.obstacles.length; x++) {
            if (this.obstacles[x].x() == this.player.x() && this.obstacles[x].y() == this.player.y()) {
                this.obstacles[x].setBlink(200)
                this.obstacles[x].setBrightness(10)
                this.blinkers--
                this.scoreBonus += 0.5
                this.scoreEarned += 1 + this.scoreBonus
            }
        }
        // Lose :(
        if (this.blinkers == bCount) this.EndGame(false)
        // Win!
        if (this.blinkers == 0) this.EndGame(true)
    }

    InputAB() {

    }
}