function Explosion(game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'Explosion');

	this.scale.set(3);
	game.physics.p2.enable(this, false);
	this.body.whatAmI = "Explosion";
	this.anchor.set(0.5);
	this.body.static = true;

	this.animations.add('Explosion', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 9, false);
	this.animations.play('Explosion'); //play animation
	game.camera.shake(0.01, 1000);

};
Explosion.prototype = Object.create(Phaser.Sprite.prototype);

Explosion.prototype.constructor = Explosion;

Explosion.prototype.update = function () {
	//if (this.animations.currentAnim.frame >= 4){
		this.body.onBeginContact.add(explode, this);
	//}
	console.log(this.animations.currentAnim.frame);
	if(this.animations.currentAnim.frame == 8){
		console.log("destroy explosion");
		this.kill();
		this.destroy();
		game.camera.shake(0.005, 200);
	}
};

function explode (body, bodyB, shapeA, shapeB, equation) {
	console.log(body.whatAmI);
	if (body != null && body.whatAmI == "enemy"){
		body.sprite.destroy();
		homebase.score++;
	 	homebase.scoreText.text = 'Score: ' + homebase.score;
	}
}