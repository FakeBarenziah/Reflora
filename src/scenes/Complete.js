import Phaser from "phaser"

export default class Complete extends Phaser.Scene{
    constructor(){
        super({key: "complete"})
    }

    preload(){
        this.load.audio("calculate", "src/assets/390531__freedomfightervictor__calculating.ogg")
    }

    create(){
        this.calculateSound = this.sound.add("calculate")

        this.calculateSound.play()

        this.add.text(150,150,"You have repaired yourself!", {fontSize:"40px"})
    }
}