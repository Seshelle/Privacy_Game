function Bullet(game, x, y, key) {
	Phaser.Sprite.call(this, game, x, y, key);

	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	
	console.log('bullet created');
	this.whatAmI = 'bullet';

	this.checkWorldBounds = true;

	this.animations.add('animatebullet', [0, 1, 2, 3], 10, true);
	this.animations.play('animatebullet'); //play animation
}

//add to constructor to Bullet prototype
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

//override default update function
Bullet.prototype.update = function() {
	this.body.onBeginContact.add(hitEnemy, this);
}

Bullet.prototype.bulletOut = function() {
	this.kill();
	console.log('killed bullet');
	player.numBullets--;
}

function hitEnemy (body, bodyB, shapeA, shapeB, equation) {
	if (body != null && body.whatAmI == "enemy"){
		//body.sprite.kill();
		this.kill();
		player.numBullets--;
	}
	else if(body != null && body.whatAmI == "player"){
	}
	else{
		this.kill();
		player.numBullets--;
	}
}