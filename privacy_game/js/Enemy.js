function Enemy(game, x, y, key, home) {
	Phaser.Sprite.call(this, game, x, y, key);
	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	//var s = Math.random() + 0.5;
	
	console.log('enemy created');
	
	this.homeBase = home;
	
	this.body.whatAmI = "enemy";
	this.previousDistance = 99999;
	
	//enemies start out small and become larger
	this.scale.x = 0.01;
	this.scale.y = 0.01;
	this.spawnScale = 0;
	
	//these are base enemy statistics
	this.body.mass = 1;
	this.acceleration = 10;
	this.maxSpeed = 0.2;
	this.damage = 20;
	
	//I set the damping high at first so they don't go flying when spawned inside each other
	this.body.damping = 0.7;
	game.time.events.add(3000, lowerDrag, this, this.body);
	
	this.body.onBeginContact.add(hitWall, this);
}

//add to constructor to Enemy prototype
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

//override default update function
Enemy.prototype.update = function() {
	
	var dx = this.x - this.homeBase.x;
	var dy = this.y - this.homeBase.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
	
	//if the enemy is still smal from spawning, gradually increase its size
	if (this.spawnScale < 1){
		this.spawnScale += 0.015;
		this.scale.x = this.spawnScale;
		this.scale.y = this.spawnScale;
	}
	
	if (this.previousDistance - distance < this.maxSpeed){
		accelerateToObject(this, this.homeBase, this.acceleration);
	}
	else{
		accelerateToObject(this, this.homeBase, 0);
	}
	
	this.previousDistance = distance;
	
	if (distance < 40){
		this.homeBase.health -= this.damage;
		this.homeBase.healthText.text = 'Health: ' + this.homeBase.health;
		this.kill();
		this.destroy();
	}
}

function hitWall (body, bodyB, shapeA, shapeB, equation) {
	if(body == null){
		homebase.score++;
	 	homebase.scoreText.text = 'Score: ' + homebase.score;
		this.body.sprite.kill();
		particleBurst(this.body);
		this.destroy();
	}
}

function accelerateToObject(obj1, obj2, speed) {
    if (typeof speed === 'undefined') { speed = 60; }
    var angle = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
    obj1.body.rotation = angle + game.math.degToRad(90);  // correct angle of enemies
    obj1.body.force.x = Math.cos(angle) * speed * obj1.body.mass;
    obj1.body.force.y = Math.sin(angle) * speed * obj1.body.mass;
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

function lowerDrag(enemy){
	enemy.damping = 0.3;
}