// import Phaser from "phaser"

// export default 

class World extends Phaser.Scene{
    constructor(){
        super({
            key: "mainWorld",
            width:800,
            height:600
        })
    }

    preload(){
        this.load.image('boiler', 'src/assets/boiler.png')
        this.load.spritesheet('robot', 'src/assets/ggj_chamalet_2020.png', {
            frameWidth:657, 
            frameHeight:830
        })
        this.load.image('platform', 'src/assets/floor.png');
        this.load.image('hud', 'src/assets/frame_fin.png');
        this.load.image('box', 'src/assets/box.png');
    }
    create(){
        this.boiler = this.add.sprite(0, 0, 'boiler')
        this.boiler.setOrigin(0, 0).setScale(0.516)

        this.hud = this.physics.add.staticGroup()
        this.hud.create(800, 0, 'hud').setOrigin(0, 0).setScale(0.33).refreshBody()
        
        this.platform = this.physics.add.staticGroup()
        this.platform.create(400, 600, 'platform').setScale(0.5).refreshBody()
        
        this.robot = this.physics.add.sprite(400, 400, 'robot')
        this.robot.setScale(0.15);
        this.robot.setBounce(0.5, 0.5);
        this.robot.setCollideWorldBounds(true);
        
        this.boxes = this.physics.add.group({
            key: 'box',
            repeat: 5,
            setXY: {x:12, y:300, stepX:70}
        })
        
        this.boxes.children.iterate(function (child) {
            
            child.setBounceY(Phaser.Math.FloatBetween(0.3, 0.3));
            child.setScale(0.2)
            
        });
        
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('robot', { start: 1, end: 5 }),
            frameRate: 7,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'robot', frame: 0 } ],
            frameRate: 20
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('robot', { start: 0, end: 5 }),
            frameRate: 7,
            repeat: -1
        });

        this.anims.create({
            key: 'hammer',
            frames: this.anims.generateFrameNumbers('robot', { start:6, end:7 }),
            frameRate:7,
            repeat: -1
        })
        
        this.keys = {
            left : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            up : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            right : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            down : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            jump : this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        }
        
        this.physics.add.collider(this.robot, this.platform)
        this.physics.add.collider(this.boxes, this.platform)
        this.physics.add.collider(this.robot, this.hud)
        
        const touchBox = (robot, box) => {
            // box.disableBody(true, true)

        }
        
        this.physics.add.overlap(this.robot, this.boxes, touchBox, null, this)
        
    }
    
    update(){
        if (this.keys.left.isDown){
            this.robot.setVelocityX(-160);
            this.robot.flipX = false

            this.robot.anims.play('left', true);
        }
        else if (this.keys.right.isDown){
            this.robot.setVelocityX(160);
            this.robot.flipX = true

            this.robot.anims.play('right', true);
        }
        else if(this.keys.down.isDown && (this.robot.body.touching.down || this.robot.body.onFloor())){
            this.robot.setVelocity(0)
            this.robot.anims.play('hammer', true);
        }
        else{
            this.robot.setVelocityX(0);

            this.robot.anims.play('turn');
        }

        if (this.keys.jump.isDown && (this.robot.body.touching.down || this.robot.body.onFloor())){
            this.robot.setVelocityY(-400);
        }

    }
}