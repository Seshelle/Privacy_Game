function MiniExplosion(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'Explosion');

	game.physics.p2.enable(this, false);
	this.whatAmI = "Explosion";
	this.anchor.set(0.5);
	this.body.static = true;
	this.body.data.shapes[0].sensor=true;

	this.animations.add('Explosion', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, false);
	this.animations.play('Explosion'); //play animation
};
MiniExplosion.prototype = Object.create(Phaser.Sprite.prototype);

MiniExplosion.prototype.constructor = MiniExplosion;

MiniExplosion.prototype.update = function () {
	this.body.onBeginContact.add(explode, this);
	if(this.animations.currentAnim.frame == 8){
		console.log("destroy explosion");
		this.kill();
		this.destroy();
		game.camera.shake(0.005, 200);
	}
};