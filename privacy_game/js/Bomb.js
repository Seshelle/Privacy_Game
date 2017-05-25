Bomb = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'Bomb');
	game.physics.p2.enable(this, false);
	this.whatAmI = "bomb";

};
Bomb.prototype = Object.create(PowerUp.prototype);

Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function () {

};
