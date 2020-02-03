import Phaser from "phaser"

export default class Loading extends Phaser.Scene{
    constructor(){
        super()
        this.log1 = 'Log 24912: Day 3185\nI did not understand why the humans panicked, \nonly that fear caused them to act in haste, bringing more destruction.'
        this.log2 = 'I do not understand the words ECOLOGICAL COLAPSE, \nmy purpose was to REPAIR what BROKE.'
        this.log3 = 'With each day fewer people returned to the FACILITY, \nand there was more to REPAIR with fewer workers.'
        this.log4 = 'I projected that one day I might BREAK too.'
        this.log5 = 'One day, the sky outside the FACILITY turned red, \nand no humans returned.'
    }

    create(){
        this.add.text(50,50, "Chamaelet Reflora unit coming online...", {fontSize:"26px"})
        
        setTimeout(() => {
            this.add.text(50,80, "Complete! Restoring most recent log entry...", {fontSize:"20px"})
        }, 2000)

        setTimeout(() => {
            this.add.text(50, 110, 
                this.log1, 
                {fontSize:"18px"})
        }, 3700)

        setTimeout(() => {
            this.add.text(50, 180, this.log2, {fontSize:"18px"})
        }, 7900)

        setTimeout(() => {
            this.add.text(50, 230, this.log3, {fontSize:"18px"})
        }, 11500)

        setTimeout(() => {
            this.add.text(50, 280, this.log4, {fontSize:"18px"})
        }, 15500)

        setTimeout(() => {
            this.add.text(50, 310, this.log5, {fontSize:"18px"})
        }, 20000)

	    this.add.text(50, 500, "Press SPACE to skip...", {fontSize:"18px"})

        this.timerKey = setTimeout(() => {this.scene.start("repairScreen")}, 18000)

        this.keys = {
            next : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        }
    }
	update(){
		if(this.keys.next.isDown){
            clearTimeout(this.timerKey)
			this.scene.start("repairScreen")
		}
	}
}
