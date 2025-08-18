export default class game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("fondo", "/public/assets/fondo.png");
    this.load.image("bloque", "/public/assets/bloque.png");
    this.load.image("pelota", "/public/assets/pelota.png");
    this.load.image("jugador", "/public/assets/plataforma.png");
  }

  create() {
    // Fondo
    this.add.image(400, 300, "fondo");

    // Plataforma del jugador
    this.player = this.physics.add.staticSprite(240, 550, "jugador").setScale(0.3);
    this.player.refreshBody();

    // Teclas
    this.cursors = this.input.keyboard.createCursorKeys();

    // Pelota
    this.ball = this.physics.add.sprite(400, 500, "pelota").setScale(0.03);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
    this.ball.setVelocity(150, -150);

    // Habilitar detección de colisión con bordes
    this.ball.body.onWorldBounds = true;
    this.physics.world.on("worldbounds", (body, up, down, left, right) => {
      if (body.gameObject === this.ball && down) {
        // Desaparece la pelota y reiníciala
        this.ball.setActive(false);
        this.ball.setVisible(false);
        this.time.delayedCall(500, () => {
          this.resetBall();
        });
      }
    });

    // Colisión pelota - plataforma
    this.physics.add.collider(this.ball, this.player);

    // Bloques
    this.bloques = this.physics.add.staticGroup();
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 4; row++) {
        let bloqueX = 120 + col * 90;
        let bloqueY = 70 + row * 40;
        let bloque = this.bloques.create(bloqueX, bloqueY, "bloque").setScale(0.2);
        bloque.refreshBody();
      }
    }

    // Colisión pelota - bloques
    this.physics.add.collider(this.ball, this.bloques, (ball, bloque) => {
      bloque.destroy();
    });
  }

  resetBall() {
    // Reinicia la pelota al centro
    this.ball.setPosition(400, 500);
    this.ball.setVelocity(150, -150);
    this.ball.setActive(true);
    this.ball.setVisible(true);
  }

  update() {
    // Movimiento de la plataforma
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
      if (this.player.x < this.player.displayWidth / 2) this.player.x = this.player.displayWidth / 2;
      this.player.refreshBody();
    } else if (this.cursors.right.isDown) {
      this.player.x += 5;
      if (this.player.x > 800 - this.player.displayWidth / 2) this.player.x = 800 - this.player.displayWidth / 2;
      this.player.refreshBody();
    }
  }
}
