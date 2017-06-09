function Home(game, key, frame) {
	Phaser.Sprite.call(this, game, game.world.width/2, game.world.height/2, key, frame);
	this.anchor.set(0.5);
	this.health = 100;
	this.score = 0;
	this.scoretimer = 0;


	this.scoreText = game.add.bitmapText(207, game.world.height + 9, 'munro', this.score, 25);
	this.scoreText.fixedToCamera = true;

	this.healthbar = game.add.sprite(388, game.world.height + 1, 'health')
	this.healthbar.frame = 0;
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
		gameOverSound.play();
		game.state.start('GameOver');
	}
}