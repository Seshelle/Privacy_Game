//predefine all states before creating the game.
var Preloader = function() {};
Preloader.prototype = {
	preload: function(){
		game.physics.startSystem(Phaser.Physics.P2JS);
		game.physics.p2.setImpactEvents(true);
		game.load.image('bg', 'assets/img/background.png');
		game.load.image('player', 'assets/img/cursor.png');
		game.load.spritesheet('enemy', 'assets/img/enemy1.png', 29, 17);
		game.load.spritesheet('bigEnemy', 'assets/img/enemy4.png', 29, 36);
		game.load.spritesheet('speedyEnemy', 'assets/img/enemy1small.png', 19, 12);
		game.load.spritesheet('fakePU', 'assets/img/enemydisguised.png', 28, 28);
		game.load.spritesheet('randomEnemy', 'assets/img/enemy2.png', 30, 27);
		game.load.spritesheet('home', 'assets/img/home.png', 71, 86);
		game.load.spritesheet('turretbase', 'assets/img/turret.png', 50, 50);
		game.load.image('turrettop', 'assets/img/turrettop.png');
		game.load.spritesheet('files', 'assets/img/files.png', 67, 77);
		game.load.spritesheet('documents', 'assets/img/documents.png', 67, 77);
		game.load.spritesheet('trash', 'assets/img/trash.png', 67, 77);
		game.load.spritesheet('toolbar', 'assets/img/toolbar.png', 1026, 44);
		game.load.spritesheet('bomb', 'assets/img/smartbomb.png', 28, 38);
		game.load.spritesheet('Explosion', 'assets/img/smartBombExplosion.png', 94, 94);
		game.load.spritesheet('heart', 'assets/img/patch.png', 45, 39);
		game.load.image('enemyparticle', 'assets/img/enemyParticle2.png');
		game.load.spritesheet('bullet', 'assets/img/bullet.png', 14, 14);
		game.load.spritesheet('powerup', 'assets/img/powerup.png', 28, 28);
		game.load.spritesheet('health', 'assets/img/health.png', 250, 43);
		game.load.audio('music', ['assets/audio/track.mp3', 'assets/audio/track.ogg']);
		
		//enemies sound
		game.load.audio('enemyEntersSafe2', ['assets/audio/enemyEntersSafe2.mp3', 'assets/audio/enemyEntersSafe2.ogg']);
		game.load.audio('enemySappingHP', ['assets/audio/enemySappingHP.mp3', 'assets/audio/enemySappingHP.ogg']);
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
		game.load.audio('turretPlacement', ['assets/audio/turretPlacement.mp3', 'assets/audio/turretPlacement.ogg']);

		//smartbomb
		game.load.audio('smartBombTick', ['assets/audio/smartBombTick.mp3', 'assets/audio/smartBombTick.ogg']);
		game.load.audio('smartBombPlacement', ['assets/audio/smartBombPlacement.mp3', 'assets/audio/smartBombPlacement.ogg']);
		game.load.audio('smartBombExplode', ['assets/audio/smartBombExplode.mp3', 'assets/audio/smartBombExplode.ogg']);

		//slow down time
		//game.load.audio('powerupSlowDown', ['assets/audio/powerupSlowDown.mp3', 'assets/audio/powerupSlowDown.ogg']);
		game.load.audio('blink', ['assets/audio/blink.mp3', 'assets/audio/blink.ogg']);

		//health
		game.load.audio('powerupHeal', ['assets/audio/powerupHeal.mp3', 'assets/audio/powerupHeal.ogg']);

		//UI
		game.load.audio('mouseHoverOverUIButton', ['assets/audio/mouseHoverOverUIButton.mp3', 'assets/audio/mouseHoverOverUIButton.ogg']);
		game.load.audio('accept', ['assets/audio/accept.mp3', 'assets/audio/accept.ogg']);
		game.load.audio('gameOver', ['assets/audio/gameOver.mp3', 'assets/audio/gameOver.ogg']);
		game.load.audio('highScore', ['assets/audio/highScore.mp3', 'assets/audio/highScore.ogg']);

		game.load.bitmapFont('munro', 'assets/font/font.png', 'assets/font/font.fnt');

		bulletMaterial = game.physics.p2.createMaterial('bulletMaterial');
		enemyMaterial = game.physics.p2.createMaterial('enemyMaterial');
		
		contactMaterial = game.physics.p2.createContactMaterial(bulletMaterial, enemyMaterial);
		contactMaterial.restitution = 0;
		contactMaterial.friction = 100;
	},
	create: function(){
		game.state.start('MainMenu');

		enemyEntersSafe1 = game.add.audio('enemyEntersSafe1');
    	enemyEntersSafe2 = game.add.audio('enemyEntersSafe2');
    	enemyEntersSafe3 = game.add.audio('enemyEntersSafe3');
    	enemySappingHP = game.add.audio('enemySappingHP');
    	enemyBombDetonate = game.add.audio('enemyBombDetonate');
    	enemyDeath = game.add.audio('enemyDeath');
    	enemyDeath2 = game.add.audio('enemyDeath2');
    	aboutToLose = game.add.audio('aboutToLose');

    	playerShoot = game.add.audio("playerShoot");
    	playerMove = game.add.audio('playerMove');
    	playerHitEnemy = game.add.audio('playerHitEnemy');
    	playerHitEnemy2 = game.add.audio('playerHitEnemy2');
    	playerHitEnemy3 = game.add.audio('playerHitEnemy3');
    	playerHitEnemy4	= game.add.audio('playerHitEnemy4');
    	playerHitEnemy5 = game.add.audio('playerHitEnemy5');

    	powerupSpawn1 = game.add.audio('powerupSpawn1');
    	powerupSpawn2 = game.add.audio('powerupSpawn2');
    	powerupSpawn3 = game.add.audio('powerupSpawn3');
    	powerupPickup1 = game.add.audio('powerupPickup1');
    	powerupPickup2 = game.add.audio('powerupPickup2');
    	powerupPickup3 = game.add.audio('powerupPickup3');

    	turretFire = game.add.audio('turretFire');
    	turretPlacement = game.add.audio('turretPlacement');

    	smartBombTick = game.add.audio('smartBombTick');
    	smartBombPlacement = game.add.audio('smartBombPlacement');
    	smartBombExplode = game.add.audio('smartBombExplode');

    	powerupHeal = game.add.audio('powerupHeal');

    	blink = game.add.audio('blink');

    	mouseHoverOverUIButton = game.add.audio('mouseHoverOverUIButton');
    	accept = game.add.audio('accept');
    	gameOverSound = game.add.audio('gameOver');
    	highScoreSound = game.add.audio('highScore');

		music = game.add.audio('music');
        music.loop = true;
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
        playButton = game.add.button(415.25, 355, 'playButton', this.startGame);
        playButton.alpha = 0.5;
        helpButton = game.add.button(586.25, 355, 'helpButton', this.helpScreen);
        helpButton.alpha = 0.5;
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    	music.play();
        this.highscoreText = game.add.bitmapText(80, 50, 'munro', highscore, 30);
        this.highscoreText.anchor.set(0.5, 0);
    	hoveroverp = false;
    	hoveroverh = false;
	    this.FKey = game.input.keyboard.addKey(Phaser.Keyboard.F);
	},
	update: function(){
		if (playButton.input.pointerOver() && !hoveroverp){
	        playButton.alpha = 1;
	        mouseHoverOverUIButton.play("", 0, 0.3);
	        hoveroverp = true;
	    }
	    else if (!playButton.input.pointerOver() && hoveroverp){
	    	hoveroverp = false;
	        playButton.alpha = 0.5;
	    }

	    if (helpButton.input.pointerOver() && !hoveroverh){
	        helpButton.alpha = 1;
	        mouseHoverOverUIButton.play("", 0, 0.3);
	        hoveroverh = true;
	    }
	    else if (!helpButton.input.pointerOver() && hoveroverh){
	    	hoveroverh = false;
	        helpButton.alpha = 0.5;
	    }

	    if(this.FKey.justPressed()){
			this.gofull();
		}
		this.FKey.onUp.add(this.gofull, this);
	},
	startGame: function(){
		accept.play("", 0, 0.3);
		game.state.start('Gameplay');
	},
	helpScreen: function(){
		accept.play("", 0, 0.3);
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
	preload: function() {
		//load assets
		game.load.image('help', 'assets/img/gameHelp.png');
		game.load.image('exit', 'assets/img/exit.png');
	},
	create: function() {
		game.add.sprite(0, 0, 'help');
		//make exit button
		helpButton = game.add.button(875, 78, 'exit', this.return);
		helpButton.alpha = 0.5;
		hoveroverH = false;
	},
	update: function(){
		if (helpButton.input.pointerOver() && !hoveroverH){
	        helpButton.alpha = 1;
	        mouseHoverOverUIButton.play("", 0, 0.3);
	        hoveroverH = true;
	    }
	    else if (!helpButton.input.pointerOver() && hoveroverH){
	    	hoveroverH = false;
	        helpButton.alpha = 0.5;
	    }
	},
	return: function(){
		accept.play("", 0, 0.3);
		game.state.start('MainMenu');
	}
}

var Gameplay = function() {};
Gameplay.prototype = {
	create: function(){
		background = game.add.sprite(0, 0, 'bg');
		game.world.setBounds(0, 0, 1024, 532);
		toolbar = game.add.sprite(0, game.world.height, 'toolbar');
		toolbar.animations.add('run', [0, 1], 1, true);
		toolbar.animations.play('run');

		documents = game.add.sprite(60, 60, 'documents');
		documents.anchor.set(0.5);
		documents.animations.add('docidle', [0], 1, true);
		documents.animations.add('docexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		documents.animations.play('docidle');

		files = game.add.sprite(60, 157, 'files');
		files.anchor.set(0.5);
		files.animations.add('filesidle', [0], 1, true);
		files.animations.add('filesexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		files.animations.play('filesidle');

		trash = game.add.sprite(60, 254, 'trash');
		trash.anchor.set(0.5);
		trash.animations.add('trashidle', [0], 1, true);
		trash.animations.add('trashexplode', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 10, false);
		trash.animations.play('trashidle');

		this.readyText;



		pl = this.game.add.group();
		player = new Player(game, game.world.width/2 + 100, game.world.height/2);
		pl.add(player);
		
		player.anchor.setTo(0.5, 0.5);
		player.body.collideworldbounds = true;

		enemies = this.game.add.group();

		bullets = this.game.add.group();

		powerups = this.game.add.group();

		homebase = new Home(game, 'home');
		game.add.existing(homebase);

		music.stop();
    	music.play();

    	emitter = game.add.emitter(0, 0, 100);
    	emitter.makeParticles('enemyparticle');

    	activeTurret = 0;
    	difficulty = 0;
    	activePU = 0;

    	start = true;
    	this.starttimer = 301;
		
		game.time.events.loop(8000, spawnEnemies, this);
		game.time.events.loop(20000, spawnPowerUps, this);
	},
	update: function() {
		if(this.starttimer >= -140){
			this.starttimer--;
		}
		if(start){
			homebase.score = 0;
			if(this.starttimer == 300){
				this.readyText = game.add.bitmapText(game.world.width/2, game.world.height/2, 'munro', '3', 128);
				this.readyText.anchor.set(0.5, 0.5);
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
				smartBombExplode.play();
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, documents.x, documents.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if(this.starttimer == -20){
				files.animations.play('filesexplode');
				smartBombExplode.play();
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, files.x, files.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if(this.starttimer == -40){
				trash.animations.play('trashexplode');
				smartBombExplode.play();
				game.camera.shake(0.01, 900);
				var enemy = new Enemy(game, trash.x, trash.y, 'enemy', homebase);
				game.add.existing(enemy);
				enemies.add(enemy);
			}
			else if (this.starttimer == -140){
				game.add.tween(this.readyText).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true, 0, 0, false);
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
		replayButton = game.add.button(45, 300, 'replay', this.startGame);
		replayButton.alpha = 0.5;
        menuButton = game.add.button(45, 420, 'return', this.toMenu);
        menuButton.alpha = 0.5;
        hoveroverR = false;
        hoveroverM = false;

        this.scoreText = game.add.bitmapText(890, game.world.height - 90, 'munro', homebase.score, 30);
        this.scoreText.anchor.set(0.5, 0);
        this.highscoreText = game.add.bitmapText(890, game.world.height - 25, 'munro', highscore, 30);
        this.highscoreText.anchor.set(0.5, 0);

        if(homebase.score > highscore){
        	highscore = homebase.score;
        	game.time.events.add(3000, function(){
        		highScoreSound.play();
        		this.highscoreText.text = highscore;
        		this.newhighscoreText = game.add.bitmapText(880, game.world.height - 140, 'munro', 'New High Score!', 20);
        		this.newhighscoreText.anchor.set(0.5, 0.5);
        		game.add.tween(this.newhighscoreText.scale).to( { x: 1.5, y: 1.5 }, 500, Phaser.Easing.Linear.None, true, 0, -1, true);
        	}, this);
        }
	},
	update: function(){
		if (replayButton.input.pointerOver() && !hoveroverR){
	        replayButton.alpha = 1;
	        mouseHoverOverUIButton.play("", 0, 0.3);
	        hoveroverR = true;
	    }
	    else if (!replayButton.input.pointerOver() && hoveroverR){
	    	hoveroverR = false;
	        replayButton.alpha = 0.5;
	    }

	    if (menuButton.input.pointerOver() && !hoveroverM){
	        menuButton.alpha = 1;
	        mouseHoverOverUIButton.play("", 0, 0.3);
	        hoveroverM = true;
	    }
	    else if (!menuButton.input.pointerOver() && hoveroverM){
	    	hoveroverM = false;
	        menuButton.alpha = 0.5;
	    }
	},
	startGame: function(){
		accept.play("", 0, 0.3);
		game.state.start('Gameplay');
		music.stop();
	},
	toMenu: function(){
		accept.play("", 0, 0.3);
		game.state.start('MainMenu');
		music.stop();
	}
}

function spawnEnemies(){
	console.log("spawn enemies");
	
	//spawns random amount of enemies depending on difficulty at random location
	var numEnemies = Math.random() * (difficulty/7) + 3;
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
			x++;
		}
		else if(whatSpawns <= 20){
			var enemy = new SpeedyEnemy(game, randX, randY, 'speedyEnemy', homebase);
			x++;
		}
		else if(whatSpawns <= 30){
			var enemy = new RandomEnemy(game, randX, randY, 'randomEnemy', homebase);
			x++;
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

		randomPUSound = Math.floor(Math.random() * 3);
		if(randomPUSound == 0){
			powerupSpawn1.play("", 0, 0.3);
		}
		else if(randomPUSound == 1){
			powerupSpawn2.play("", 0, 0.3);
		}
		else{
			powerupSpawn3.play("", 0, 0.3);
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
game.state.add('Help', Help);


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

var highscore = 0;
var difficulty = 0;
var homeInvulnerable = false;
var keepInvulnerable  = false;

var bulletMaterial;
var enemyMaterial;
var contactMaterial;

//start game preloading
game.state.start('Preloader');
