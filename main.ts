game.splash("Hello")
scene.setBackgroundColor(5)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f . . f . . . . . . 
    . . . . f f . . . . f . . . . . 
    . . . . f . f . f . f . . . . . 
    . . . . f . . . . . f . . . . . 
    . . . . f f . f . . f . . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f . f f . . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.player1.moveSprite(mySprite, 100, 100)
