function Home(game, key, frame) {
	Phaser.Sprite.call(this, game, game.world.width/2, game.world.height/2, key, frame);
	//game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	this.health = 100;

	this.healthText = game.add.text(16,16, 'Health: 100', {fontSize: '32px', fill: '#FFF'});
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