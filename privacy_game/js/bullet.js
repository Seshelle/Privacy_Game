function Bullet(game, x, y, key) {
	Phaser.Sprite.call(this, game, x, y, key);

	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	
	console.log('bullet created');
	this.whatAmI = 'bullet';

	this.checkWorldBounds = true;
	this.events.onOutOfBounds.add(this.bulletOut, this);

	this.animations.add('animate', [0, 1, 2, 3], 10, true);
	this.animations.play('animate'); //play animation
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
		particleBurst(body);
		body.sprite.kill();
		this.kill();
		player.numBullets--;
	}
	else if(body == null){
		this.kill();
		player.numBullets--;
	}
}

function particleBurst(enemy){
	emitter.x = enemy.x;
	emitter.y = enemy.y;

    emitter.width = 10;
    emitter.height = 10;
    emitter.minParticleScale = 0.5;
    emitter.maxParticleScale = 1;
    emitter.minParticleSpeed.setTo(-200, -200);
    emitter.maxParticleSpeed.setTo(200, 200);
    emitter.gravity.set(0,0);

	emitter.start(true, 500, null, 10);
	emitter.update();
}

