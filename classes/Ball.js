export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "pelota");

    this.scene = scene;
    this.setScale(0.03);

    this.scene.add.existing(this);
    this.scene.physics.world.enable(this);

    this.setCollideWorldBounds(true);
    this.setBounce(1);
    this.setVelocity(150, -150);

    // Detectar colisión con el borde inferior
    this.body.onWorldBounds = true;
    this.scene.physics.world.on("worldbounds", (body, up, down) => {
      if (body.gameObject === this && down) {
        this.setActive(false).setVisible(false);
        this.scene.time.delayedCall(500, () => this.reset());
      }
    });
  }

  reset() {
    this.setPosition(400, 500);
    this.setVelocity(150, -150);
    this.setActive(true).setVisible(true);
  }
}
