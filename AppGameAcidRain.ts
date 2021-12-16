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
    gameOver: boolean
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
        for (let x = 0; x < 5; x++) {
            this.obstacles[x].setBrightness(this.obstacleBrightness)
        }
        this.gameOver = false
        game.resume()
    }

    EndGame(instance: AppGameAcidRain) {
        instance.gameOver = true
        game.pause()
        for (let x = 0; x < 5; x++) {
            instance.obstacles[x].delete()
        }
        instance.player.delete()
    }


    GameLoop(instance: AppGameAcidRain) {
        // Show score if game is over
        if (instance.gameOver) {
            basic.clearScreen()
            basic.showString(game.score().toString())
            return
        }

        // Move obstacles
        instance.spriteMove = randint(0, 4)
        if (instance.obstacles[instance.spriteMove].isDeleted()) {
            instance.obstacles[instance.spriteMove] = game.createSprite(instance.spriteMove, 0)
            instance.obstacles[instance.spriteMove].setBrightness(instance.obstacleBrightness)
        }
        else if (instance.obstacles[instance.spriteMove].y() >= 4) {
            instance.obstacles[instance.spriteMove].delete()
        }
        else {
            instance.obstacles[instance.spriteMove].change(LedSpriteProperty.Y, 1)
        }

        // Detect collision
        for (let x = 0; x < 5; x++) {
            if (instance.player.x() == instance.obstacles[x].x() &&
                instance.player.y() == instance.obstacles[x].y() &&
                !(instance.obstacles[x].isDeleted())) {
                instance.EndGame(instance)
                return
            }
        }

        // Increase game speed and score
        if (instance.speed > instance.maxSpeed) {
            instance.speed -= 3000
            instance.scoreEarned += 1
        }
        game.setScore(game.score() + instance.scoreEarned)
        control.waitMicros(instance.speed)
    }

    RunApp() {
        led.fadeIn(100);
        this.ResetGame()
        TaskManager.AppTasks = [function () { this.GameLoop(this) }]
    }

    CloseApp() {
        this.EndGame(this);
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
}