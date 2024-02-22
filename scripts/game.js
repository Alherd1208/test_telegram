

const width = window.innerWidth;
let height = Telegram.WebApp.viewportStableHeight;
let app = new PIXI.Application({ width: width * 0.9, height: height});
document.getElementById("game").appendChild(app.view);
//document.game.appendChild(app.view);
//const texturePromise = PIXI.Assets.load('https://pixijs.com/assets/bunny.png');
const texturePromise = PIXI.Assets.load('assets/BaboonLogo.png');
//const texturePromise = PIXI.Assets.load('./assets/bunny.png');
texturePromise.then((resolvedTexture) =>
{
    // create a new Sprite from the resolved loaded Texture
    const bunny = PIXI.Sprite.from(resolvedTexture);

    // center the sprite's anchor point
    bunny.anchor.set(0.5);

    // move the sprite to the center of the screen
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    app.stage.addChild(bunny);
});
// let sprite = PIXI.Sprite.from('./assets/BaboonLogo.png');
// app.stage.addChild(sprite);
//   let elapsed = 0.0;
//   // Tell our application's ticker to run a new callback every frame, passing
//   // in the amount of time that has passed since the last tick
//   app.ticker.add((delta) => {
//     // Add the time to our total elapsed time
//     elapsed += delta;
//     // Update the sprite's X position based on the cosine of our elapsed time.  We divide
//     // by 50 to slow the animation down a bit...
//     sprite.x = 100.0 + Math.cos(elapsed/50.0) * 100.0;
//   });