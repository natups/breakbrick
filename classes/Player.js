export default class Player extends Phaser.Physics.Arcade.Sprite {
  // Player class extends Phaser's Arcade Sprite
  constructor(scene, x, y) {
    super(scene, x, y, "jugador"); // llama al constructor de la clase superior/base
    this.setScale(0.3);
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);
    this.setCollideWorldBounds(true);
    this.setImmovable(true);
  }

  update() {
    // Movimiento de la plataforma
    if (this.cursors.left.isDown) {
      this.player.x -= 5;
      if (this.player.x < this.player.displayWidth / 2)
        this.player.x = this.player.displayWidth / 2;
      this.player.refreshBody();
    } else if (this.cursors.right.isDown) {
      this.player.x += 5;
      if (this.player.x > 800 - this.player.displayWidth / 2)
        this.player.x = 800 - this.player.displayWidth / 2;
      this.player.refreshBody();
    }
  }
}
