function PowerUp(game, x, y, key, home) {
	Phaser.Sprite.call(this, game, x, y, key);
	game.physics.p2.enable(this, false);
	console.log('PowerUp created');
	this.anchor.set(0.5);
	this.body.whatAmI = "powerup";
	this.id = "Default";

	this.animations.add('animatePU', [0, 1, 2, 3, 4], 10, true);
	this.animations.play('animatePU'); //play animation
}

//add to constructor to PowerUp prototype
PowerUp.prototype = Object.create(Phaser.Sprite.prototype);
PowerUp.prototype.constructor = PowerUp;

//override default update function
PowerUp.prototype.update = function() {

}