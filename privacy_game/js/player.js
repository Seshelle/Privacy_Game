'use strict';

var Player = function (game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'player', frame);
	
	this.scale.setTo(0.5);
	game.physics.p2.enable(this, false);
	this.body.angularDamping = 0.2;
	this.body.damping = 0.2;
	this.body.mass = playerMass;
	
	this.body.whatAmI = "player";

	this.totalBullets = 1;
	this.numBullets = 0;

	this.currPowerup = "None";

	this.powerupText = game.add.bitmapText(745, game.world.height + 9, 'munro', this.currPowerup, 25);

	this.fireKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	this.PUKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

	this.body.onBeginContact.add(playerHit, this);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

var touchX = 0;
var touchY = 0;
var accelValue = 40;
var downTime = 0;
var playerMass = 10;
var acceleration = 500;

Player.prototype.update = function() {
	if(this.numBullets < 0){
		this.numBullets = 0;
	}
	
	this.body.angularForce = 0;
	this.body.angularVelocity = 0;
	
	//go towards mouse pointer when mouse button down
	if(!start){
		if (game.input.activePointer.isDown)
		{
			downTime += game.time.elapsed;
			accelerateToPoint(this, playerMass * acceleration);
		}else{
			//player comes to a smooth stop when mouse button is let go
			player.body.velocity.x *= 0.9;
			player.body.velocity.y *= 0.9;
			//set cursor downtime to zero since it was released
			downTime = 0;
		}
		
		touchX = game.input.activePointer.position.x;
		touchY = game.input.activePointer.position.y;
		
		//adjust for world coordinates, as camera coordinates won't necessarily match
		var actualPointerY = game.input.activePointer.position.y + game.camera.y;
		var actualPointerX = game.input.activePointer.position.x + game.camera.x;
		
		//get angle between pointer and character and accelerate in that direction
	    var angle = Math.atan2(actualPointerY - this.y, actualPointerX - this.x);
		this.body.rotation = angle + game.math.degToRad(90);

		if(this.fireKey.justPressed() && !activeTurret){
			this.fire();
		}

		if(this.PUKey.justPressed()){
			//use powerup
			usePU(this.currPowerup);
		}

		this.body.onBeginContact.add(collect, this);
	}
};

Player.prototype.fire = function(){
	if (this.numBullets < this.totalBullets){
		var angleRadians = Math.atan2(player.y - this.game.input.activePointer.position.y, player.x - this.game.input.activePointer.position.x);
		var xpos = Math.cos(angleRadians) * 15;
		var ypos = Math.sin(angleRadians) * 15;

        console.log('fired');
        turretFire.play("", 0, 0.3);
        var bullet = new Bullet(game, this.x - xpos, this.y - ypos, 'bullet');
		//accelerateToPoint(bullet, 30000);
		
		bullet.body.rotation = angleRadians + game.math.degToRad(90);
		bullet.body.force.x = Math.cos(angleRadians) * -30000;    // accelerateToObject 
		bullet.body.force.y = Math.sin(angleRadians) * -30000;
		
        bullets.add(bullet);
		this.numBullets++;
	}
}

function accelerateToPoint(obj1, speed) {
	//if speed is not defined, set to default of 60
    if (typeof speed === 'undefined') { speed = 60; }
	
	//adjust for world coordinates, as camera coordinates won't necessarily match
	var actualPointerY = game.input.activePointer.position.y + game.camera.y;
	var actualPointerX = game.input.activePointer.position.x + game.camera.x;
	
	//get angle between pointer and character and accelerate in that direction
    var angle = Math.atan2(actualPointerY - obj1.y, actualPointerX - obj1.x);
	obj1.body.rotation = angle + game.math.degToRad(90);
    obj1.body.force.x = Math.cos(angle) * speed;    // accelerateToObject 
    obj1.body.force.y = Math.sin(angle) * speed;
}


//player collision with powerup
function collect (body, bodyB, shapeA, shapeB, equation) {
	//console.log(body.whatAmI);
	if (body != null && body.whatAmI == "powerup" && this.currPowerup == "None"){
		this.currPowerup = body.sprite.id;
		body.sprite.kill();
		activePU--;
		var randomSound = Math.floor(Math.random() * 3);
		if(randomSound == 0){
			powerupPickup1.play("", 0, 0.3);
		}
		else if (randomSound == 1){
			powerupPickup2.play("", 0, 0.3);
		}
		else{
			powerupPickup3.play("", 0, 0.3);
		}
		this.powerupText.text = this.currPowerup;
	}
}

function usePU(powerup){
	switch (powerup){
		case "Blink":
			game.add.tween(player.scale).to( { x: 0, y: 0 }, 80, Phaser.Easing.Linear.None, true, 0, 0, false);
			game.time.events.add(80, teleport, this);
			blink.play();
			player.currPowerup = "None";
			break;
		case "Turret":
			if(!activeTurret){
				activeTurret = true;
				turretPlacement.play();
				var turret = new Turret(game, homebase.x, homebase.y);
				game.add.existing(turret);
				player.currPowerup = "None";
			}
			else{
				player.currPowerup = "Turret";
			}
			break;
		case "Bomb":
			var bomb = new Bomb(game, player.x, player.y);
			//bomb.body.static = true;
			game.add.existing(bomb);
			smartBombPlacement.play("", 0, 0.3);
			player.currPowerup = "None";
			break;
		case "Patch":
			powerupHeal.play("", 0, 0.3);
			homebase.health = homebase.health + 20 > 100 ? 100 : homebase.health + 20;
			var heart = game.add.sprite(homebase.x, homebase.y, 'heart');
			heart.anchor.set(0.5);
			game.add.existing(heart);
			heart.animations.add('beat', [0, 1, 2], 5, true);
			heart.animations.play('beat');
			
			if (homeInvulnerable){
				keepInvulnerable = true;
			}
			homeInvulnerable = true;
			game.time.events.add(5000, patcher, this, heart);

			player.currPowerup = "None";
			break;
		default:
			console.log("no powerup");
	}
	player.powerupText.text = player.currPowerup;
}

function teleport(){
	player.body.x = game.input.activePointer.position.x;
	player.body.y = game.input.activePointer.position.y;
	game.add.tween(player.scale).to( { x: 0.5, y: 0.5 }, 80, Phaser.Easing.Linear.None, true, 0, 0, false);
	var explode = new MiniExplosion(game, game.input.activePointer.position.x, game.input.activePointer.position.y, 'Explosion');
	game.add.existing(explode);
}

function patcher(heart){
	if (!keepInvulnerable){
		heart.kill();
		heart.destroy();
		homeInvulnerable = false;
	}
	else{
		keepInvulnerable = false;
	}
}

function playerHit(body, bodyB, shapeA, shapeB, equation){
	if(body && body.whatAmI == 'enemy'){
		var rSound = Math.floor(Math.random() * 5);
		switch(rSound){
			case 0:
				playerHitEnemy.play("", 0, 0.5);
				break;
			case 1:
				playerHitEnemy2.play("", 0, 0.5);
				break;
			case 2:
				playerHitEnemy3.play("", 0, 0.5);
				break;
			case 3:
				playerHitEnemy4.play("", 0, 0.5);
				break;
			case 4:
				playerHitEnemy5.play("", 0, 0.5);
				break;
			default:
				break;
		}
	}
}