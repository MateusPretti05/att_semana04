//Conectando cena com o menu;
class menu extends Phaser.Scene {
    constructor() {
      super({ key: "menu" });
    }
 
    //Carregando imagem da história do jogo;
    preload() {
      this.load.image("menu", "assets/menu.png");
    }
 
    create() {
      //Adicionando imagem com o contexto do jogo e funcionalidades;
      var hist = this.add.image(400, 300, "menu").setInteractive();
      hist.on("pointerdown", function(){
      this.scene.start("telagame");
      },
      this
      );
    }
  }
