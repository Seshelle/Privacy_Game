function Enemy(game, x, y, key, home) {
	Phaser.Sprite.call(this, game, x, y, key);
	game.physics.p2.enable(this, false);
	this.anchor.set(0.5);
	//var s = Math.random() + 0.5;
	
	console.log('enemy created');
	
	this.homeBase = home;
	
	this.body.whatAmI = "enemy";
	this.shortestDistance = 99999;
	
	this.scale.x = 0.01;
	this.scale.y = 0.01;
	this.spawnScale = 0;
	
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
	
	if (this.shortestDistance - distance < 0.1){
		accelerateToObject(this,this.homeBase,30);
	}
	
	if (distance < this.shortestDistance){
		this.shortestDistance = distance;
	}
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
	
	this.body.onBeginContact.add(hitWall, this);
}

function hitWall (body, bodyB, shapeA, shapeB, equation) {
	if(body == null){
		this.body.sprite.kill();
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