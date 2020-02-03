class Loading extends Phaser.Scene{
    constructor(){
        super({
            key: "loading"
        })
        this.log1 = 'Log 24912: Day 3185'
        this.log2 = 'I did not understand why the humans panicked,' 
        this.log3 = 'only that fear caused them to act in haste, bringing more destruction.'
        this.log4 = 'I do not understand the phrase ECOLOGICAL COLAPSE,' 
        this.log5 = 'my purpose is to REPAIR what BROKE.'
        this.log6 = 'With each day fewer people returned to the FACILITY,'
        this.log7 = 'and there was more to REPAIR with fewer workers.'
        this.log8 = 'I projected that one day I might BREAK too.'
        this.log9 = 'One day, the sky outside the FACILITY turned red,'
        this.log10 = 'and no humans returned.'
    }

    create(){
        this.add.text(50,50, "Chamaelet Reflora unit coming online...", {fontSize:"26px"})
        
        setTimeout(() => {
            this.add.text(50,80, "Complete! Restoring most recent log entry...", {fontSize:"20px"})
        }, 750)

        setTimeout(() => {
            this.add.text(50, 110, 
                this.log1, 
                {fontSize:"18px"})
        }, 1500)

        setTimeout(() => {
            this.add.text(50, 140, 
                this.log2, 
                {fontSize:"18px"})
        }, 2250)

        setTimeout(() => {
            this.add.text(50, 170, 
                this.log3, 
                {fontSize:"18px"})
        }, 3000)

        setTimeout(() => {
            this.add.text(50, 200, 
                this.log4, 
                {fontSize:"18px"})
        }, 3750)

        setTimeout(() => {
            this.add.text(50, 230, 
                this.log5, 
                {fontSize:"18px"})
        }, 4500)

        setTimeout(() => {
            this.add.text(50, 260, 
                this.log6, 
                {fontSize:"18px"})
        }, 5250)

        setTimeout(() => {
            this.add.text(50, 290, 
                this.log7, 
                {fontSize:"18px"})
        }, 6000)

        setTimeout(() => {
            this.add.text(50, 320, 
                this.log8, 
                {fontSize:"18px"})
        }, 6750)

        setTimeout(() => {
            this.add.text(50, 350, 
                this.log9, 
                {fontSize:"18px"})
        }, 7500)

        setTimeout(() => {
            this.add.text(50, 380, 
                this.log10, 
                {fontSize:"18px"})
        }, 8250)

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
