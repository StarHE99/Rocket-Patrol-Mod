class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }
  preload() {
      //load background
      this.load.image('ui', 'assets/ui.png');
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion1.wav');
      this.load.audio('sfx_explosion2', './assets/explosion2.wav');
      this.load.audio('sfx_explosion3', './assets/explosion3.wav');
      this.load.audio('sfx_explosion4', './assets/explosion4.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
  create() {
      this.add.rectangle(0, 0, 640, 480, 0x008080).setOrigin(0 ,0);
        this.popup = this.add.tileSprite(0,0,640,480, 'ui').setOrigin(0,0);
      let menuConfig = {
          fontFamily: 'Courier New',
          fontSize: '23px',
          color: '#FF4DBE',
          align: 'right',
          padding: {
          top: 5,
          bottom: 5,
          },
          fixedWidth: 0
      }
      //show menu text
      this.add.text(game.config.width/2,game.config.height/2-borderUISize-borderPadding, 'Hell Fire', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 
          'Use <--> arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
          menuConfig.color='#E5B7F6';
          this.add.text(game.config.width/2, game.config.height/2+borderUISize+borderPadding,'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      //this.add.text(20,20, "Rocket Patrol Menu");
      //this.scene.start("playScene");
  }
  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
}