function Enemy(game, x, y, key, home) {
	Phaser.Sprite.call(this, game, x, y, key);
	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	//var s = Math.random() + 0.5;
	
	console.log('enemy created');
	
	this.homeBase = home;
	
	this.body.whatAmI = "enemy";
	this.previousDistance = 99999;
	
	this.scale.x = 0.01;
	this.scale.y = 0.01;
	this.spawnScale = 0;
	
	this.body.onBeginContact.add(hitWall, this);
	
	//radians = game.physics.arcade.angleBetween(this, homebase);
	//degrees = radians * (180/Math.PI);
	//game.physics.arcade.velocityFromAngle(degrees, 60, this.body.velocity);
	
}

//add to constructor to Enemy prototype
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

//override default update function
Enemy.prototype.update = function() {
	
	var dx = this.x - this.homeBase.x;
	var dy = this.y - this.homeBase.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
	
	if (this.spawnScale < 1){
		this.spawnScale += 0.015;
		this.scale.x = this.spawnScale;
		this.scale.y = this.spawnScale;
	}
	
	if (this.previousDistance - distance < 0.1){
		accelerateToObject(this,this.homeBase,30);
	}
	else{
		accelerateToObject(this,this.homeBase,0);
	}
	
	this.previousDistance = distance;
	
	/*else if(distance - this.shortestDistance > 200 || distance > 400){
		console.log("enemy killed");
		this.destroy();
	}*/
	
	if (distance < 30){
		this.homeBase.health -= 10;
		this.homeBase.healthText.text = 'Health: ' + this.homeBase.health;
		this.body.sprite.kill();
		this.destroy();
	}
	

}

function hitWall (body, bodyB, shapeA, shapeB, equation) {
	if(body == null){
		this.body.sprite.kill();
		particleBurst(this.body);
		this.destroy();
	}
}

function accelerateToObject(obj1, obj2, speed) {
    if (typeof speed === 'undefined') { speed = 60; }
    var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    obj1.body.rotation = angle + game.math.degToRad(90);  // correct angle of angry bullets (depends on the sprite used)
    obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject 
    obj1.body.force.y = Math.sin(angle) * speed;
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