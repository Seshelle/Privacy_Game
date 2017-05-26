Turret = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'turret');
	game.physics.p2.enable(this, false);
	this.whatAmI = "turret";
	this.anchor.set(0.5);

};
Turret.prototype = Object.create(Phaser.Sprite.prototype);

Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {

};
