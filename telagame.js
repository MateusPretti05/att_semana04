//Definindo variáveis globais que serão utilizadas;
var jogador;
var bolas = [];
var pontos = 0;
var placar;


//Conectando cena do jogo com a cena de introdução;
class telagame extends Phaser.Scene {
  constructor() {
    super({ key: "telagame" });}


    //Carregando iamgens que serão usadas durante o jogo;
    preload() {
      this.load.image("bg", "assets/bg.png");
      this.load.image("chao", "assets/chao.png");
      this.load.image("plat1", "assets/plataforma1.png");
      this.load.image("plat2", "assets/plataforma2.png");
      this.load.spritesheet("jogador", "assets/trainer.png", {
        frameWidth: 200,
        frameHeight: 280,
      });
      this.load.image("bola1", "assets/pokebola_amarela.png");
      this.load.image("bola2", "assets/pokebola_azul.png");
      this.load.image("bola3", "assets/pokebola_roxa.png");
      this.load.image("bola4", "assets/pokebola_vermelha.png");
  
  
    }
  
  
    create() {
      //Adicionando plano de fundo;
      this.add.image(400, 300, "bg");
  
  
      //Adicionando chão ao jogo;
      var chao = this.physics.add.staticImage(400, 570, "chao");
  
  
      //Adicionando jogador e suas colisões;
      jogador = this.physics.add.sprite(100, 400, "jogador").setScale(0.2);
      jogador.setCollideWorldBounds(true);
      this.physics.add.collider(jogador, chao);
  
  
      //Adicionando plataformas e suas colisões com o jogador;
      var plat1 = this.physics.add
        .staticImage(600, 450, "plat1")
        .setScale(1.5)
        .refreshBody();
      this.physics.add.collider(jogador, plat1);
      var plat2 = this.physics.add
        .staticImage(400, 350, "plat2")
        .setScale(1.5)
        .refreshBody();
      this.physics.add.collider(jogador, plat2);
      var plat3 = this.physics.add.staticImage(200, 275, "plat2")
      .setScale(1.5)
      .refreshBody();
    this.physics.add.collider(jogador, plat3);
    var plat4 = this.physics.add
      .staticImage(400, 200, "plat1")
      .setScale(1.5)
      .refreshBody();


    //Adicionando as pokebolas que serão coletadas durante o jogo;
    bolas.push(
      this.physics.add
        .staticImage(575, 415, "bola1")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(625, 415, "bola2")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(450, 315, "bola3")
        .setScale(0.08)
        .refreshBody(),
      this.physics.add
        .staticImage(400, 315, "bola4")
        .setScale(0.08)
        .refreshBody(),
     
    );


    //Adicionando placar ao jogo;
    placar = this.add.text(10, 550, 'Pontos:' + pontos, {fontSize:'30px', fill:'#000', fontStyle: 'bold'});


    //Adicionando a funcionalidade de coletar as pokebolas e adicionar pontuação ao placar;
    this.physics.add.overlap(jogador, bolas[0], function () {
      bolas[0].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[1], function () {
      bolas[1].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[2], function () {
      bolas[2].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[3], function () {
      bolas[3].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
    this.physics.add.overlap(jogador, bolas[4], function () {
      bolas[4].destroy();
      pontos += 1;
      placar.setText('Pontos:' + pontos);
    });
   


    //Adicionando animação do personagem;
    this.anims.create({
      key: "andarDireita",
      frames: this.anims.generateFrameNumbers("jogador", {
        start: 5,
        end: 8,
      }),


      //Definindo os frames que serão utilizados;
      frameRate: 10,
      repeat: -1,
    });


    this.anims.create({
      key: "andarEsquerda",
      frames: this.anims.generateFrameNumbers("jogador", { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });


    this.anims.create({
      key: "parado",
      frames: this.anims.generateFrameNumbers("jogador", { start: 5, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });


    this.teclado = this.input.keyboard.createCursorKeys();
  }


  update() {
    //Verificando se o jogador está tocando chão ou plataformas;
    const touchingGroundOrPlatform =
      jogador.body.touching.down ||
      jogador.body.touching.left ||
      jogador.body.touching.right;


    //Movimento para a direita
    if (this.teclado.right.isDown) {
      jogador.setVelocityX(160);
      jogador.anims.play("andarDireita", true);
    }
    //Movimento para a esquerda
    else if (this.teclado.left.isDown) {
      jogador.setVelocityX(-160);
      jogador.anims.play("andarEsquerda", true);
    }
    //Parar o movimento horizontal quando nenhuma tecla de movimento estiver pressionada
    else {
      jogador.setVelocityX(0);
      jogador.anims.play("parado", true);
    }


    // Verificar se a tecla de seta para cima está pressionada e se o jogador está tocando no chão ou em alguma plataforma
    if (this.teclado.up.isDown && touchingGroundOrPlatform) {
      jogador.setVelocityY(-250);
    }


    //verificar pontuação para que ao chegar a 8 o jogo pare e o jogador possa ler a mensagem de parabéns
    if (pontos > 7) {
      this.physics.pause();
      this.add.text(
        0,
        25,
        "                       Parabéns, agora Nico poderá capturar quantos pokemon quiser",
        { fontSize: "23px", fill: "#000000" }




      );
    }
  }
}



  