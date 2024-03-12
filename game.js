// definindo as dimensões;
var gameState = {
    larguraJogo: 800,
    alturaJogo: 600,
  };
 
  // definindo as configurações;
  var config = {
    type: Phaser.AUTO,
    width: gameState.larguraJogo,
    height: gameState.alturaJogo,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },


    },


    scene: [tela1 , menu , telagame],
  };
 
 
  var game = new Phaser.Game(config);
