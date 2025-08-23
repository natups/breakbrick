export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, cursors) {
    super(scene, x, y, "jugador");

    this.scene = scene;
    this.cursors = cursors;

    this.setScale(0.3);

    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);

    this.setImmovable(true);
  }

  update() {
    if (this.cursors.left.isDown) {
      this.x -= 5;
      if (this.x < this.displayWidth / 2) this.x = this.displayWidth / 2;
    } else if (this.cursors.right.isDown) {
      this.x += 5;
      if (this.x > 800 - this.displayWidth / 2) this.x = 800 - this.displayWidth / 2;
    }
  }
}
