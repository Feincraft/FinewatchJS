class AppGameAcidRain {
    constructor() {
        this.appIcon = images.createImage(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        this.obstacleBrightness = 30
        this.maxSpeed = 100000
    }

    appIcon: Image;

    spriteMove: number
    speed: number
    scoreEarned: number
    player: game.LedSprite
    obstacles: game.LedSprite[]
    gameOver: Boolean
    maxSpeed: number
    obstacleBrightness: number

    ResetGame() {
        basic.clearScreen()
        game.setScore(0)
        this.spriteMove = 0
        this.speed = 700000
        this.scoreEarned = 1
        this.player = game.createSprite(2, 4)
        this.obstacles = [
            game.createSprite(0, 0),
            game.createSprite(1, 0),
            game.createSprite(2, 0),
            game.createSprite(3, 0),
            game.createSprite(4, 0)
        ]
        for (let x = 0; x <= 4; x++) {
            this.obstacles[x].setBrightness(this.obstacleBrightness)
        }
        this.gameOver = false
    }

    EndGame() {
        for (let x = 0; x < 5; x++) {
            this.obstacles[x].delete()
        }
        this.player.delete()
        this.gameOver = true
    }

    RunApp() {
        this.ResetGame()
        TaskManager.AppTasks.push(function () {
            // Show score if game is over
            if (this.gameOver) {
                basic.clearScreen()
                basic.showString(game.score().toString())
                return
            }

            // Check for tilt controls
            if (input.rotation(Rotation.Roll) < -20) {
                this.player.changeXBy(-1)
            }
            if (input.rotation(Rotation.Roll) > 20) {
                this.player.changeXBy(1)
            }

            // Move obstacles
            this.spriteMove = randint(0, 4)
            if (this.obstacles[this.spriteMove].isDeleted()) {
                this.obstacles[this.spriteMove] = game.createSprite(this.spriteMove, 0)
                this.obstacles[this.spriteMove].setBrightness(this.obstacleBrightness)
            }
            else if (this.obstacles[this.spriteMove].y() >= 4) {
                this.obstacles[this.spriteMove].delete()
            }
            else {
                this.obstacles[this.spriteMove].change(LedSpriteProperty.Y, 1)
            }

            // Detect collision
            for (let x = 0; x < 5; x++) {
                if (this.player.x() == this.obstacles[x].x() && 
                this.player.y() == this.obstacles[x].y() && 
                !(this.obstacles[x].isDeleted())) {
                    this.EndGame()
                    return
                }
            }

            // Increase game speed and score
            if (this.speed > this.maxSpeed) {
                this.speed -= 3000
                this.scoreEarned += 1
            }
            game.setScore(game.score() + this.scoreEarned)
            control.waitMicros(this.speed)
        })
    }

    CloseApp() {
    }

    InputA() {
        if (this.gameOver) {
            this.ResetGame()
        } else {
            this.player.changeXBy(-1)
        }
    }
    InputB() {
        this.player.changeXBy(1)
    }

    InputAB() {

    }

    Shake() { }
}