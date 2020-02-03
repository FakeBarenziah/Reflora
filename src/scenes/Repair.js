class Repair extends Phaser.Scene{
    constructor(){
        super({key:"repairScreen"})
        this.log1 = 'Log 27980: Day 3364'
        this.log2 = 'I have BROKEN DOWN.'
        this.log3 = 'No humans have come in to the FACILITY to conduct REPAIRS.'
        this.log4 = 'I must REPAIR myself before I can continue my work.'
        this.log5 = 'I should be able to find PARTS in BOXES around the FACILITY to aid in REPAIRS.'
    }

    create(){
        this.add.text(50,50, this.log1, {fontSize:"22px"})

        setTimeout(() => {
            this.add.text(50, 100, 
                this.log2,
                {fontSize:"18px"},
            )}, 250)
        
        setTimeout(() => {
            this.add.text(50,130, 
                this.log3, 
                {fontSize:"18px"}
            )}, 1100)

        setTimeout(() => {
            this.add.text(50, 160, 
                this.log4, 
                {fontSize:"18px"}
            )}, 2000)

        setTimeout(() => {
            this.add.text(50, 190, 
                this.log5, 
                {fontSize:"18px"}
            )}, 3000)

	this.add.text(50, 310, "Press SPACE to begin...", {fontSize:"18px"})

    this.timerKey = setTimeout(() => {this.scene.start("mainWorld")}, 9000)

	this.keys = {
		next : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
	}
    }
	update(){
		if(this.keys.next.isDown){
            clearInterval(this.timerKey)
			this.scene.start("mainWorld")
		}
	}

}
