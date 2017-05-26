Dash = function (game, x, y) {
	PowerUp.call(this, game, x, y, 'Dash');
	this.body.id = "Dash";
};
Dash.prototype = Object.create(PowerUp.prototype);

Dash.prototype.constructor = Dash;

Dash.prototype.update = function () {

};
