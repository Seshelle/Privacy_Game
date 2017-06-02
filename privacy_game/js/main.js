//predefine all states before creating the game.
var Preloader = function() {};
Preloader.prototype = {
	preload: function(){
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.load.image('bg', 'assets/img/background.png');
		game.load.image('player', 'assets/img/cursor.png');
		game.load.image('enemy', 'assets/img/enemy.png');
		game.load.spritesheet('bigEnemy', 'assets/img/enemy4.png', 29, 36);
		game.load.spritesheet('speedyEnemy', 'assets/img/enemy1small.png', 19, 12);
		game.load.spritesheet('fakePU', 'assets/img/enemydisguised.png', 28, 28);
		game.load.spritesheet('randomEnemy', 'assets/img/enemy2.png', 28, 27);
		game.load.image('home', 'assets/img/home.png');
		game.load.image('turretbase', 'assets/img/turret.png');
		game.load.image('turrettop', 'assets/img/turrettop.png');
		game.load.spritesheet('files', 'assets/img/files.png', 67, 77);
		game.load.spritesheet('documents', 'assets/img/documents.png', 67, 77);
		game.load.spritesheet('trash', 'assets/img/trash.png', 67, 77);
		game.load.spritesheet('toolbar', 'assets/img/toolbar.png', 1026, 44);
		game.load.spritesheet('bomb', 'assets/img/smartbomb.png', 28, 38);
		game.load.spritesheet('Explosion', 'assets/img/smartBombExplosion.png', 98, 94);
		game.load.image('enemyparticle', 'assets/img/enemyParticle2.png');
		game.load.spritesheet('bullet', 'assets/img/bullet.png', 14, 14);
		game.load.spritesheet('powerup', 'assets/img/powerup.png', 28, 28);
		game.load.audio('music', ['assets/audio/track3.mp3', 'assets/audio/track3.ogg']);
		
		//enemies sound
		game.load.audio('enemyEntersSafe2', ['assets/audio/enemyEntersSafe2.mp3', 'assets/audio/enemyEntersSafe2.ogg']);
		game.load.audio('enemySappingHP', ['assets/audio/enemySappingHP.mp3', 'assets/audio/enemyenemySappingHP.ogg']);
		game.load.audio('enemyBombDetonate', ['assets/audio/enemyBombDetonate.mp3', 'assets/audio/enemyBombDetonate.ogg']);
		game.load.audio('enemyDeath2', ['assets/audio/enemyDeath2.mp3', 'assets/audio/enemyDeath2.ogg']);
		game.load.audio('enemyDeath', ['assets/audio/enemyDeath.mp3', 'assets/audio/enemyDeath.ogg']);
		game.load.audio('aboutToLose', ['assets/audio/aboutToLose.mp3', 'assets/audio/aboutToLose.ogg']);
		game.load.audio('enemyEntersSafe3', ['assets/audio/enemyEntersSafe3.mp3', 'assets/audio/enemyEntersSafe3.ogg']);
		game.load.audio('enemyEntersSafe1', ['assets/audio/enemyEntersSafe1.mp3', 'assets/audio/enemyEntersSafe1.ogg']);

		//player sound
		game.load.audio('playerShoot', ['assets/audio/playerShoot.mp3', 'assets/audio/playerShoot.ogg']);
		game.load.audio('playerMove', ['assets/audio/playerMove.mp3', 'assets/audio/playerMove.ogg']);
		game.load.audio('playerHitEnemy5', ['assets/audio/playerHitEnemy5.mp3', 'assets/audio/playerHitEnemy5.ogg']);
		game.load.audio('playerHitEnemy4', ['assets/audio/playerHitEnemy4.mp3', 'assets/audio/playerHitEnemy4.ogg']);
		game.load.audio('playerHitEnemy3', ['assets/audio/playerHitEnemy3.mp3', 'assets/audio/playerHitEnemy3.ogg']);
		game.load.audio('playerHitEnemy2', ['assets/audio/playerHitEnemy2.mp3', 'assets/audio/playerHitEnemy2.ogg']);
		game.load.audio('playerHitEnemy', ['assets/audio/playerHitEnemy.mp3', 'assets/audio/playerHitEnemy.ogg']);

		//power-ups
		game.load.audio('powerupSpawn3', ['assets/audio/powerupSpawn3.mp3', 'assets/audio/powerupSpawn3.ogg']);
		game.load.audio('powerupSpawn2', ['assets/audio/powerupSpawn2.mp3', 'assets/audio/powerupSpawn2.ogg']);
		game.load.audio('powerupSpawn1', ['assets/audio/powerupSpawn1.mp3', 'assets/audio/powerupSpawn1.ogg']);
		game.load.audio('powerupPickup3', ['assets/audio/powerupPickup3.mp3', 'assets/audio/powerupPickup3.ogg']);
		game.load.audio('powerupPickup2', ['assets/audio/powerupPickup2.mp3', 'assets/audio/powerupPickup2.ogg']);
		game.load.audio('powerupPickup1', ['assets/audio/powerupPickup1.mp3', 'assets/audio/powerupPickup1.ogg']);

		//turret
		game.load.audio('turretFire', ['assets/audio/turretFire.mp3', 'assets/audio/turretFire.ogg']);
		game.load.audio('turretLaserFire', ['assets/audio/turretLaserFire.mp3', 'assets/audio/turretLaserFire.ogg']);
		game.load.audio('turretPlacement', ['assets/audio/turretPlacement.mp3', 'assets/audio/turretPlacement.ogg']);

		//smartbomb
		game.load.audio('smartBombTick', ['assets/audio/smartBombTick.mp3', 'assets/audio/smartBombTick.ogg']);
		game.load.audio('smartBombPlacement', ['assets/audio/smartBombPlacement.mp3', 'assets/audio/smartBombPlacement.ogg']);
		game.load.audio('smartBombExplode', ['assets/audio/smartBombExplode.mp3', 'assets/audio/smartBombExplode.ogg']);

		//slow down time
		game.load.audio('powerupSlowDown', ['assets/audio/powerupSlowDown.mp3', 'assets/audio/powerupSlowDown.ogg']);
		game.load.audio('powerupNormalSpeed', ['assets/audio/powerupNormalSpeed.mp3', 'assets/audio/powerupNormalSpeed.ogg']);

		//health
		game.load.audio('powerupHeal', ['assets/audio/powerupHeal.mp3', 'assets/audio/powerupHeal.ogg']);

		//UI
		game.load.audio('pause', ['assets/audio/pause.mp3', 'assets/audio/pause.ogg']);
		game.load.audio('mouseHoverOverUIButton', ['assets/audio/mouseHoverOverUIButton.mp3', 'assets/audio/mouseHoverOverUIButton.ogg']);
		game.load.audio('invalid (mouse clicking on greyed out button)', ['assets/audio/invalid (mouse clicking on greyed out button).mp3', 'assets/audio/invalid (mouse clicking on greyed out button).ogg']);
		game.load.audio('accept (mouse clicking on UI button)', ['assets/audio/accept (mouse clicking on UI button).mp3', 'assets/audio/accept (mouse clicking on UI button).ogg']);


		bulletMaterial = game.physics.p2.createMaterial('bulletMaterial');
		enemyMaterial = game.physics.p2.createMaterial('enemyMaterial');
		
		contactMaterial = game.physics.p2.createContactMaterial(bulletMaterial, enemyMaterial);
		contactMaterial.restitution = 0;
		contactMaterial.friction = 100;
	},
	create: function(){
		game.state.start('MainMenu');
	}
}

var MainMenu = function(game){};
MainMenu.prototype = {
	preload: function(){
		//load assets
		game.load.image('menu', 'assets/img/mainMenu.png'); 
		game.load.image('playButton', 'assets/img/play.png');
		game.load.image('helpButton', 'assets/img/help.png');
	},
	create: function(){
        game.add.sprite(0, 0, 'menu');
        //add buttons 
        var playButton = game.add.button(415.25, 355, 'playButton', this.startGame);
        var helpButton = game.add.button(586.25, 355, 'helpButton', this.helpScreen);
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
	},
	startGame: function(){
		game.state.start('Gameplay');
	},
	helpScreen: function(){
		game.state.start('Help');
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
var Help = function(){};
Help.prototype = {

};

var Gameplay = function() {};
Gameplay.prototype = {
	create: function(){
		background = game.add.sprite(0, 0, 'bg');

		toolbar = game.add.sprite(0, game.world.height - 44, 'toolbar');
		toolbar.animations.add('run', [0, 1], 1, true);
		toolbar.animations.play('run');

		documents = game.add.sprite(60, 60, 'documents');
		documents.anchor.set(0.5);
		//documents.animations.add('docidle', [0], 1, true);
		//documents.animations.add('docexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		//documents.animations.play('docidle');

		files = game.add.sprite(60, 157, 'files');
		files.anchor.set(0.5);
		//files.animations.add('filesidle', [0], 1, true);
		//files.animations.add('filesexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		//files.animations.play('filesidle');

		trash = game.add.sprite(60, 254, 'trash');
		trash.anchor.set(0.5);
		//trash.animations.add('trashidle', [0], 1, true);
		//trash.animations.add('trashexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		//trash.animations.play('trashidle');

		this.readyText;

		game.world.setBounds(0, 0, 1024, 532);

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

    	start = true;
    	this.starttimer = 301;
		
		game.time.events.loop(8000, spawnEnemies, this);
		game.time.events.loop(15000, spawnPowerUps, this);
	},
	update: function() {
		if(this.starttimer >= -140){
			this.starttimer--;
		}
		if(start){
			homebase.score = 0;
			if(this.starttimer == 300){
				this.readyText = game.add.text(game.world.width/2, game.world.height/2, '3', {fontSize: '48px', fill: '#000'});
			}
			else if(this.starttimer == 200){
				this.readyText.text = '2';
			}
			else if(this.starttimer == 100){
				this.readyText.text = '1';
			}
			else if(this.starttimer == 0){
				this.readyText.text = 'GO';
				start = false;
			}
		}
		else{
			if(this.starttimer == -1){
				documents.animations.play('docexplode');
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, documents.x, documents.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if(this.starttimer == -20){
				files.animations.play('filesexplode');
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, files.x, files.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if(this.starttimer == -40){
				trash.animations.play('trashexplode');
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, trash.x, trash.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if (this.starttimer == -140){
				this.readyText.text = '';
				documents.destroy();
				trash.destroy();
				files.destroy();
				documents.kill();
				trash.kill()
				files.kill();
			}

			game.world.bringToTop(bullets);
			game.world.bringToTop(pl);
		}
	}
}

//Game Over state
var GameOver = function() {};
GameOver.prototype = {
	preload: function(){
		game.load.image('gameOver', 'assets/img/gameOver.png');
		game.load.image('replay', 'assets/img/replay.png');
		game.load.image('return', 'assets/img/returnMenu.png');
	},
	create: function(){
		game.add.sprite(0,0, 'gameOver');
		//add buttons
		var replayButton = game.add.button(45, 300, 'replay', this.startGame);
        var menuButton = game.add.button(45, 420, 'return', this.toMenu);
	},
	startGame: function(){
		game.state.start('Gameplay');
	},
	toMenu: function(){
		game.state.start('MainMenu');
	}
}

function spawnEnemies(){
	console.log("spawn enemies");
	
	//spawns random amount of enemies depending on difficulty at random location
	var numEnemies = Math.random() * (difficulty/10) + 4;
	difficulty++;
	
	for(let x = 0; x < numEnemies; x++){
		
		//spawn enemies set distance away at random angle
		var spawnDistance = 200;
		var angle = Math.random() * 6.28;
		var randX = homebase.x + Math.cos(angle) * spawnDistance * 1.25;
		var randY = homebase.y + Math.sin(angle) * -spawnDistance;
		
		//create a biased list of possibilities for enemy spawns
		//special enemies have increased chances over time
		var whatSpawns = Math.random() * 100;
		if (whatSpawns <= 10){
			var enemy = new HeavyEnemy(game, randX, randY, 'bigEnemy', homebase);
		}
		else if(whatSpawns <= 20){
			var enemy = new SpeedyEnemy(game, randX, randY, 'speedyEnemy', homebase);
		}
		else if(whatSpawns <= 30){
			var enemy = new RandomEnemy(game, randX, randY, 'randomEnemy', homebase);
		}
		else{
			var enemy = new Enemy(game, randX, randY, 'enemy', homebase);
		}
		game.add.existing(enemy);
		enemies.add(enemy);
	}
}

function spawnPowerUps(){
	if(activePU < maxPU){
		var angle = Math.random() * 6.28;
		var randX = homebase.x + Math.cos(angle) * 225 * 1.25;
		var randY = homebase.y + Math.sin(angle) * -225;
		
		//the likelihood of a powerup being fake increases with difficulty
		var fakeChance = difficulty/300;
		if (fakeChance > 0.3) {
			fakeChance = 0.3;
		}
		if (Math.random() <= fakeChance){
			var enemy = new FakePowerup(game, randX, randY, 'fakePU', homebase);
			game.add.existing(enemy);
			enemies.add(enemy);
		}
		else{
			var PU = new PowerUp(game, randX, randY);
			powerups.add(PU);
			game.add.existing(PU);
			activePU++;
		}
	}
}

//create game and new states
var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'Test');
game.state.add('Preloader', Preloader);
game.state.add('Gameplay', Gameplay);
game.state.add('Help'. Help);
game.state.add('MainMenu', MainMenu);
game.state.add('GameOver', GameOver);


//make global variables so level doesn't have to be reloaded after game over state
var start;

var bullets;
var player;
var pl;
var enemies;

var activeTurret = false;
var maxPU = 4;
var activePU = 0;

var homebase;
var powerups;
var emitter;

var difficulty = 0;

var bulletMaterial;
var enemyMaterial;
var contactMaterial;

//start game preloading
game.state.start('Preloader');
