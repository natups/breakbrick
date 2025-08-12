export default class game extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("game");
  }

  init() {
  }

  preload() { // cargo los assets
    this.load.image("fondo", "/public/assets/fondo.png");
 }


  create() {
    // Fondo de cielo reescalado y centrado
    this.add.image(400, 300, "fondo").setScale(4);
  }   

}