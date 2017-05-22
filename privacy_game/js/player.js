'use strict';

var Player = function (game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'player', frame);
	
	game.physics.p2.enable(this, false);
	this.body.angularDamping = 0.2;
	this.body.mass = playerMass;
	
	this.body.whatAmI = "player";
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
	
	this.body.angularForce = 0;
	
	//go towards mouse pointer when mouse button down
	if (game.input.activePointer.isDown)
	{
		//only start moving after a fifth of a second had passed
		//makes it easier to spin without interfering with movement and vice versa
		downTime += game.time.elapsed;
		if (downTime > 200){
			//accelerate player toward pointer location
			accelerateToPoint(this, playerMass * acceleration)
		}
		else{
			//rotate charracter when swiping across screen, equal to speed of swipe
			if (touchY + game.camera.y < this.y){
				this.body.angularForce += (touchX - game.input.activePointer.position.x) * -playerMass;
			}
			else{
				this.body.angularForce += (touchX - game.input.activePointer.position.x) * playerMass;
			}
			
			if(touchX + game.camera.x > this.x){
				this.body.angularForce += (touchY - game.input.activePointer.position.y) * -playerMass;
			}
			else{
				this.body.angularForce += (touchY - game.input.activePointer.position.y) * playerMass;
			}
		}
		
	}else{
		//player comes to a smooth stop when mouse button is let go
		player.body.velocity.x *= 0.9;
		player.body.velocity.y *= 0.9;
		//set cursor downtime to zero since it was released
		downTime = 0;
	}
	
	touchX = game.input.activePointer.position.x;
	touchY = game.input.activePointer.position.y;
};

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
