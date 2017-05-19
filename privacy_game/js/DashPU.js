function PowerUp(game, x, y, key, home) {
	
	this.body.id = "Dash";

}

//add to constructor to PowerUp prototype
PowerUp.prototype = Object.create(Phaser.Sprite.prototype);
PowerUp.prototype.constructor = PowerUp;

//override default update function
PowerUp.prototype.update = function() {

}




BasePlayer = function (game, x, y, key) {
	Phaser.Sprite.call(this, game, x, y, key);
};
BasePlayer.prototype = Object.create(Phaser.Sprite.prototype);
BasePlayer.prototype.constructor = BasePlayer;
BasePlayer.prototype.specialMovement = function (arg1, arg2, ... ..) {
	
	// ...do your thing!
};

Human = function (game, x, y) {
	BasePlayer.call(this, game, x, y, 'human');
};
Human.prototype = Object.create(BasePlayer.prototype);

Human.prototype.constructor = Human;Human.prototype.laugh = function (arg1, arg2, ... ..) {
	// ...ha ha ha ha ha
};
Enemy = function (game, x, y) {
	BasePlayer.call(this, game, x, y, 'enemy');
};

Enemy.prototype = Object.create(BasePlayer.prototype);

Enemy.prototype.constructor = Enemy;Enemy.prototype.laugh = function (arg1, arg2, ... ..) {
	// ...mwaha ha ha mwaha ha
};
