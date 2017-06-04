TurretGun = function (game, x, y) {
	Phaser.Sprite.call(this, game, x, y, 'turrettop');
	game.physics.p2.enable(this, false);
	this.body.data.shapes[0].sensor=true;
	this.body.whatAmI = "turretgun";
	this.anchor.set(0.5);
	this.shoottimer = 10;

};
TurretGun.prototype = Object.create(Phaser.Sprite.prototype);

TurretGun.prototype.constructor = TurretGun;

TurretGun.prototype.update = function () {
	//adjust for world coordinates, as camera coordinates won't necessarily match
	var actualPointerY = game.input.activePointer.position.y + game.camera.y;
	var actualPointerX = game.input.activePointer.position.x + game.camera.x;
	
	//get angle between pointer and character and accelerate in that direction
    var angle = Math.atan2(actualPointerY - this.y, actualPointerX - this.x);
	this.body.rotation = angle + game.math.degToRad(135);

	var angleRadians = Math.atan2(this.y - game.input.activePointer.position.y, this.x - game.input.activePointer.position.x);
	var xpos = Math.cos(angleRadians) * 25;
	var ypos = Math.sin(angleRadians) * 25;

	this.shoottimer--;
    if(this.shoottimer == 0){
	    var bullet = new Bullet(game, this.x - xpos, this.y - ypos, 'bullet');
		accelerateToPoint(bullet, 30000);
	    bullets.add(bullet);
	    turretFire.play();
	    this.shoottimer = 10;
	}
};
