function SpeedyEnemy(game, x, y, key, home) {
	Enemy.call(this, game, x, y, key, home);
	
	//override enemy statistics
	this.body.mass = 0.2;
	this.acceleration = 2;
	this.damage = 10;
	
	//this enemy drastically increases speed after a few seconds
	game.time.events.add(2000, zoom, this, this);
}

//add to constructor to SpeedyEnemy prototype
SpeedyEnemy.prototype = Object.create(Enemy.prototype);
SpeedyEnemy.prototype.constructor = SpeedyEnemy;

function zoom(enemy){
	enemy.maxSpeed = 1;
	enemy.acceleration = 100;
}