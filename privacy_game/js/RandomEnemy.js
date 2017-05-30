function RandomEnemy(game, x, y, key, home) {
	Enemy.call(this, game, x, y, key, home);
	
	this.acceleration = 1000;
	
	this.looper = game.time.events.loop(750, moveRandomly, this, this, this.homeBase);
	game.time.events.add(2000, increaseAcc, this, this);
	this.body.onBeginContact.add(hitEdge, this, this.body);
}

//add to constructor to RandomEnemy prototype
RandomEnemy.prototype = Object.create(Enemy.prototype);
RandomEnemy.prototype.constructor = RandomEnemy;

//override enemy update method
RandomEnemy.prototype.update = function() {
	
	//if the enemy is still small from spawning, gradually increase its size
	if (this.spawnScale < 1){
		this.spawnScale += 0.015;
		this.scale.x = this.spawnScale;
		this.scale.y = this.spawnScale;
	}
	
	var dx = this.x - this.homeBase.x;
	var dy = this.y - this.homeBase.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
	
	if (distance < 40){
		this.homeBase.health -= this.damage;
		this.homeBase.healthText.text = 'Health: ' + this.homeBase.health;
		game.time.events.remove(this.looper);
		this.kill();
		this.destroy();
	}
}

//this enemy moves in sudden bursts of speed
function moveRandomly (enemy, home){
	//Their velocity is set closer to zero when moving, that way their movement is more erratic
	enemy.body.angularVelocity = 0;
	enemy.body.velocity.x = enemy.body.velocity.x * 8 / 10;
	enemy.body.velocity.y = enemy.body.velocity.y * 8 / 10;
	
	//their angle of movement is chosen randomly within 90 degrees of home
	var angle = Math.atan2(home.y - enemy.y, home.x - enemy.x);
	angle += (Math.random() - 0.5) * 3.2;
	enemy.body.rotation = angle + game.math.degToRad(90);
	enemy.body.force.x = Math.cos(angle) * enemy.acceleration * enemy.body.mass;
    enemy.body.force.y = Math.sin(angle) * enemy.acceleration * enemy.body.mass;
}

function increaseAcc(enemy){
	enemy.acceleration = 5000;
}

function hitEdge (body, bodyB, shapeA, shapeB, equation) {
	if(body == null){
		game.time.events.remove(this.looper);
	}
}