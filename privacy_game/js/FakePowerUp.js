function FakePowerup(game, x, y, key, home) {
	Enemy.call(this, game, x, y, key, home);
	
	//override enemy statistics
	this.body.mass = 5;
	this.damage = 30;
	
	this.spring;
	this.attached = false;
	
	this.body.onBeginContact.add(hitPlayer, this, this);
}

//add to constructor to FakePowerup prototype
FakePowerup.prototype = Object.create(Enemy.prototype);
FakePowerup.prototype.constructor = FakePowerup;

//override enemy update function since it doesn't accelerate
FakePowerup.prototype.update = function() {
	
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
		game.physics.p2.removeSpring(this.spring);
		this.kill();
		this.destroy();
	}
}

function hitPlayer (body, enemy) {
	
	if (body != null && this.attached == false && body.whatAmI == "player"){
		console.log('fake attached');
		this.attached = true;
		this.body.mass = 15;
		this.spring = game.physics.p2.createSpring(this, player, 1, 300, 10);
	}else if (body == null){
		game.physics.p2.removeSpring(this.spring);
	}
}