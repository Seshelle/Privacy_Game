Turret = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'turretbase');
	//game.physics.p2.enable(this, false);
	this.whatAmI = "turret";
	this.anchor.set(0.5);

	this.turretGun = new TurretGun(game, this.x, this.y);
	this.turretGun.body.static = true;
	game.add.existing(this.turretGun);
	this.timer = 500;
};
Turret.prototype = Object.create(Phaser.Sprite.prototype);

Turret.prototype.constructor = Turret;

Turret.prototype.update = function () {
	this.timer--;
	if (this.timer == 0){
		activeTurret = false;
		console.log('destroy turret');
		this.turretGun.destroy();
		this.turretGun.kill();
		this.destroy();
		this.kill();
	}
	game.world.bringToTop(this.turretGun);
};
