export default class Ball extends Phaser.Physics.Arcade.Sprite {
  // Ball class extends Phaser's Arcade Sprite
  constructor(scene, x, y) {
    super(scene, x, y, "pelota"); // llama al constructor de la clase superior/base
    this.setScale(0.03);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
    this.setBounce(1);
    this.setVelocity(150, -150);
  }
}
