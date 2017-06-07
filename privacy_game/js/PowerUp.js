function PowerUp(game, x, y, key, home) {
	Phaser.Sprite.call(this, game, x, y, 'powerup');
	game.physics.p2.enable(this, false);
	console.log('PowerUp created');
	this.anchor.set(0.5);
	this.body.whatAmI = "powerup";
	this.PUs = ["Blink", "Turret", "Bomb", "Patch"];
	var choose = Math.floor(Math.random() * this.PUs.length);

	this.id = this.PUs[choose];
	
	this.body.damping = 0.5;

	this.animations.add('animatePU', [0, 1, 2, 3, 4], 10, true);
	this.animations.play('animatePU'); //play animation
}

//add to constructor to PowerUp prototype
PowerUp.prototype = Object.create(Phaser.Sprite.prototype);
PowerUp.prototype.constructor = PowerUp;