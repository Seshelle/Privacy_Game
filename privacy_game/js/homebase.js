function Home(game, key, frame) {
	Phaser.Sprite.call(this, game, game.world.width/2, game.world.height/2, key, frame);
	//game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	this.health = 100;
	this.score = 0;
	this.scoretimer = 0;


	this.scoreText = game.add.text(425, game.world.height + 10, 'Score: 0', {fontSize: '20px', fill: '#000'});
	this.scoreText.fixedToCamera = true;

	this.healthText = game.add.text(550, game.world.height + 10, 'Health: 100', {fontSize: '20px', fill: '#000'});

	this.healthText.fixedToCamera = true;
	
	//this.body.static = true;
	
	//this.body.whatAmI = "home";
}

//add to constructor to Home prototype
Home.prototype = Object.create(Phaser.Sprite.prototype);
Home.prototype.constructor = Home;

//override default update function
Home.prototype.update = function() {
	//lose condition
	if(this.health <= 0){
		game.state.start('GameOver');
	}

	// this.scoretimer++;
	// if(this.scoretimer % 100 == 0){
	// 	this.score++;
	// 	this.scoretimer = 0;
	// 	this.scoreText.text = 'Score: ' + this.score;
	// }

	//enemy collision with home
	//this.body.onBeginContact.add(homeHit, this);
}

//enemy collision with home
/*function homeHit (body, bodyB, shapeA, shapeB, equation) {
	console.log(body.whatAmI);
	if (body.whatAmI == "enemy"){
		body.sprite.kill();
		this.health -= 10;
		this.healthText.text = 'Health: ' + this.health;
	}
}*/