function Home(game, key, frame) {
	Phaser.Sprite.call(this, game, game.world.width/2, game.world.height/2, key, frame);
	//game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	this.health = 100;
	this.score = 0;
	this.scoretimer = 0;


	this.scoreText = game.add.text(425, game.world.height + 10, 'Score: 0', {font: 'munro', fontSize: '20px', fill: '#000'});
	this.scoreText.fixedToCamera = true;

	this.healthbar = game.add.sprite(550, game.world.height + 10, 'health')
	this.healthbar.frame = 0;

	//this.healthText = game.add.text(550, game.world.height + 10, 'Health: 100', {font: 'munro', fontSize: '20px', fill: '#000'});

	//this.healthText.fixedToCamera = true;

	this.animations.add('idle', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10, true);
	this.animations.play('idle');

	this.animations.add('damaged', [12, 0], 1, false);
}

//add to constructor to Home prototype
Home.prototype = Object.create(Phaser.Sprite.prototype);
Home.prototype.constructor = Home;

//override default update function
Home.prototype.update = function() {
	this.healthbar.frame = 10 - (this.health / 10);
	//lose condition
	if(this.health <= 0){
		this.health = 0;
		highscore = (this.score > highscore) ? this.score : highscore;
		game.state.start('GameOver');
	}
}