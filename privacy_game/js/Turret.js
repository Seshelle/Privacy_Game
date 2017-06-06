Turret = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'turretbase');
	//game.physics.p2.enable(this, false);
	this.whatAmI = "turret";
	this.anchor.set(0.5);

	this.turretGun = new TurretGun(game, this.x, this.y);
	this.turretGun.body.static = true;
	game.add.existing(this.turretGun);
	this.frame = 0;
	this.animations.add('death', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10, false);
	game.time.events.add(5000, this.death, this);
};
Turret.prototype = Object.create(Phaser.Sprite.prototype);

Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {
	game.world.bringToTop(this.turretGun);
};
Turret.prototype.death = function () {
	this.animations.play('death');
	activeTurret = false;
	console.log('destroy turret');
	this.turretGun.destroy();
	this.turretGun.kill();
	game.time.events.add(1000, this.turretDeath, this);
}
Turret.prototype.turretDeath = function() {
		this.destroy();
		this.kill();
}
