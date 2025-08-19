export default class Blocks extends Phaser.Physics.Arcade.StaticGroup {
  constructor(scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    this.createBlocks();
  }

  createBlocks() {
    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 4; row++) {
        let bloqueX = 120 + col * 90;
        let bloqueY = 70 + row * 40;
        let bloque = this.create(bloqueX, bloqueY, "bloque").setScale(0.2);
        bloque.refreshBody();
      }
    }
  }
}
