Turret = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'turret');
	game.physics.p2.enable(this, false);
	this.whatAmI = "turret";

};
Turret.prototype = Object.create(PowerUp.prototype);

Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {

};
