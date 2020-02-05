import Phaser from "phaser";
import scenes from "./scenes/index.js";

const gameConfig = {
  width: 1200,
  height: 600,
  backgroundColor: "#333",
  scene: scenes,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 }
    }
  }
};
window.onload = function() {
  var game = new Phaser.Game(gameConfig);
};
