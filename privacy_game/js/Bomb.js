var Bomb = function(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'bomb');

	//game.physics.p2.enable(this, false);
	this.whatAmI = "bomb";
	this.anchor.set(0.5);

	this.animations.add('placebomb',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24], 5, false);
	this.animations.play('placebomb'); //play animation
	console.log('bomb created');
};

Bomb.prototype = Object.create(Phaser.Sprite.prototype);

Bomb.prototype.constructor = Bomb;

Bomb.prototype.update = function () {
	if(this.animations.currentAnim.frame % 5 == 0){
		smartBombTick.play();
	}
	if (this.animations.currentAnim.frame == 24){
		console.log('explode!');
		smartBombExplode.play();
		var explode = new Explosion(game, this.x, this.y, 'Explosion');
		game.add.existing(explode);
		this.kill();
		this.destroy();
	}
};
