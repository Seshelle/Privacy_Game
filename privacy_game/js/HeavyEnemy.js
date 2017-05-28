function HeavyEnemy(game, x, y, key, home) {
	Enemy.call(this, game, x, y, key, home);
	
	//override enemy statistics
	this.body.mass = 20;
	this.maxSpeed = 0.1;
	this.damage = 50;
}

//add to constructor to HeavyEnemy prototype
HeavyEnemy.prototype = Object.create(Enemy.prototype);
HeavyEnemy.prototype.constructor = HeavyEnemy;