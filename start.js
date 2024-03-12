//Iniciando o jogo;
class tela1 extends Phaser.Scene {
    constructor() {
      super({ key: "tela1" });
    }
 
    //Carregando imagens;
    preload() {
      this.load.image("inicial", "assets/tela_inicial.png");
      this.load.image("start", "assets/start.png");
    }
 
    //Adicionando plano de fundo da tela inicial;
    create() {
      var Inicial = this.add.image(
        gameState.larguraJogo / 2,
        gameState.alturaJogo / 2,
        "inicial"
      );
 
      //Adicionando botão de start e sua funcionalidade;
      var start = this.add.image(400, 400, "start").setInteractive();
      start.on("pointerdown", function () {
        this.scene.start("menu");
      },
      this
      );
    }
  }
