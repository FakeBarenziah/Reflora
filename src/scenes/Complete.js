import Phaser from "phaser";

export default class Complete extends Phaser.Scene {
  constructor() {
    super({ key: "complete" });
  }

  preload() {
    this.load.audio(
      "calculate",
      "src/assets/390531__freedomfightervictor__calculating.ogg"
    );
  }

  create() {
    this.calculateSound = this.sound.add("calculate");

    this.calculateSound.play();

    this.add.text(150, 150, "You have repaired yourself!", {
      fontSize: "40px"
    });

    this.add.text(150, 400, "Press SPACE to restart", { fontSize: "28px" });

    this.timerKey = setTimeout(() => {
      this.scene.start("loading");
    }, 5000);

    this.keys = {
      next: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    };
  }

  update() {
    if (this.keys.next.isDown) {
      this.calculateSound.stop();
      clearTimeout(this.timerKey);
      this.scene.start("loading");
    }
  }
}
