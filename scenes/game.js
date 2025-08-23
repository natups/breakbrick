import Player from "../classes/Player.js";
import Ball from "../classes/Ball.js";
import Blocks from "../classes/Blocks.js";

export default class game extends Phaser.Scene {
  constructor() {
    super("game");
  }

  preload() {
    this.load.image("fondo", "public/assets/fondo.png");
    this.load.image("bloque", "public/assets/bloque.png");
    this.load.image("pelota", "public/assets/pelota.png");
    this.load.image("jugador", "public/assets/plataforma.png");
  }

  create() {
    // Fondo
    this.add.image(400, 300, "fondo");

    // Teclas
    this.cursors = this.input.keyboard.createCursorKeys();

    // Creo objetos usando las clases
    this.player = new Player(this, 240, 550, this.cursors);
    this.ball = new Ball(this, 400, 500);
    this.blocks = new Blocks(this);

    // Colisiones
    this.physics.add.collider(this.ball, this.player);
    this.physics.add.collider(this.ball, this.blocks, (ball, bloque) => {
      bloque.destroy();
    });
  }

  update() {
    this.player.update();
  }
}
