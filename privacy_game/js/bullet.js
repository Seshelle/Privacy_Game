function Bullet(game, x, y, key) {
	Phaser.Sprite.call(this, game, x, y, key);

	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	
	console.log('bullet created');
	this.whatAmI = 'bullet';

	this.checkWorldBounds = true;

	this.spantimer = 1000;

	this.animations.add('animatebullet', [0, 1, 2, 3], 10, true);
	this.animations.play('animatebullet'); //play animation
	
	this.body.setMaterial(bulletMaterial);
}

//add to constructor to Bullet prototype
Bullet.prototype = Object.create(Phaser.Sprite.prototype);
Bullet.prototype.constructor = Bullet;

//override default update function
Bullet.prototype.update = function() {
	this.body.onBeginContact.add(hitEnemy, this);
	this.spantimer--;
	if(this.spantimer == 0){
		destroyBullet(this);
	}
}

function hitEnemy (body, bodyB, shapeA, shapeB, equation) {
	if (body != null && body.whatAmI == "player"){
	}
	else{
		//wait for 30 millisecends so that bullet can put force into enemy before disappearing
		game.time.events.add(30, destroyBullet, this, this);
	}
}

function destroyBullet(bullet){
	player.numBullets = activeTurret ? player.numBullets : player.numBullets - 1;
	bullet.destroy();
	bullet.kill();
}