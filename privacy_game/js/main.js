//predefine all states before creating the game.
var Preloader = function() {};
Preloader.prototype = {
	preload: function(){
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.load.image('bg', 'assets/img/background.png');
		game.load.image('player', 'assets/img/cursor.png');
		game.load.image('enemy', 'assets/img/enemy.png');
		game.load.image('home', 'assets/img/home.png');
		game.load.spritesheet('bomb', 'assets/img/smartbomb.png', 28, 38);
		game.load.spritesheet('Explosion', 'assets/img/smartBombExplosion.png', 98, 94);
		game.load.image('enemyparticle', 'assets/img/enemyParticle2.png');
		game.load.spritesheet('bullet', 'assets/img/bullet.png', 14, 14);
		game.load.spritesheet('powerup', 'assets/img/powerup.png', 28, 28);
		game.load.audio('music', ['assets/audio/track3.mp3', 'assets/audio/track3.ogg']);
	},
	create: function(){
		game.state.start('MainMenu');
	}
}

var MainMenu = function(game){};
MainMenu.prototype = {
	preload: function(){
		//load assets
	},
	create: function(){
        game.add.text(16, 165, 'Press space to play\nHold mouse to move, space to shoot, W to use powerup', {fontSize: '32px', fill: '#FFF'});

        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	},
	update: function(){
		//spacebar press to go to next state
		this.key = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		this.key.onDown.add(this.gofull, this);
		if(this.key.justPressed()){
			console.log('Goto Game');
			game.state.start('Gameplay');
		}
	},
	gofull: function() {

	    if (game.scale.isFullScreen)
	    {
	        game.scale.stopFullScreen();
	    }
	    else
	    {
	        game.scale.startFullScreen(false);
	    }

	}
}

var Gameplay = function() {};
Gameplay.prototype = {
	create: function(){
		background = game.add.sprite(0, 0, 'bg');

		game.world.setBounds(0, 0, 1024, 576);

		pl = this.game.add.group();
		player = new Player(game, game.world.width/2 + 100, game.world.height/2);
		pl.add(player);
		
		player.anchor.setTo(0.5, 0.5);
		player.body.collideworldbounds = true;

		enemies = this.game.add.group();

		bullets = this.game.add.group();

		powerups = this.game.add.group();

		//game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.5, 0.5);

		homebase = new Home(game, 'home');
		game.add.existing(homebase);

		music = game.add.audio('music');
        music.loop = true;
    	music.play();

    	emitter = game.add.emitter(0, 0, 100);
    	emitter.makeParticles('enemyparticle');
	},
	update: function() {
		
		//check for collision between enemy and player
		//game.physics.arcade.collide(enemies, pl);

		enemytimer++;
		//every 5 seconds
		if(enemytimer === 500){
			console.log("spawn enemies");
			//spawns random amount of enemies (1-10) at random location
			var numEnemies = Math.random() * 7;
			for(let x = 0; x < numEnemies; x++){
				
				//spawn enemies set distance away at random angle
				var spawnDistance = 200;
				var angle = Math.random() * 6.28;
				var randX = homebase.x + Math.cos(angle) * spawnDistance;
				var randY = homebase.y + Math.sin(angle) * -spawnDistance;
				
				var enemy = new Enemy(game, randX, randY, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			enemytimer = 0;
		}

		PUtimer++;
		if(PUtimer >= (Math.random() * 600) + 500){
			if(activePU < maxPU){
				var angle = Math.random() * 6.28;
				var randX = homebase.x + Math.cos(angle) * 250;
				var randY = homebase.y + Math.sin(angle) * -250;
				var PU = new PowerUp(game, randX, randY);
				powerups.add(PU);
				game.add.existing(PU);
				activePU++;
			}
			PUtimer = 0;
		}

		game.world.bringToTop(bullets);
		game.world.bringToTop(pl);
	}
}

//Game Over state
var GameOver = function() {};
GameOver.prototype = {
	preload: function(){
	},
	create: function(){
		game.add.text(100, 100, 'Game Over, press space to play again', {fontSize: '32px', fill: '#FFFFFF'});
	},
	update: function(){
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			console.log('Goto Menu');
			game.state.start('MainMenu');
		}
	}
}

//create game and new states
var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'Test');
game.state.add('Preloader', Preloader);
game.state.add('Gameplay', Gameplay);
game.state.add('MainMenu', MainMenu);
game.state.add('GameOver', GameOver);


//make global variables so level doesn't have to be reloaded after game over state
var bullets;
var player;
var pl;
var enemytimer = 0;
var PUtimer = 0;
var maxPU = 4;
var activePU = 0;
var enemies;
var homebase;
var powerups;
var emitter;

//start game preloading
game.state.start('Preloader');
