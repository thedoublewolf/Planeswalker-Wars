let Player = function () {
	this.health = 20;
	this.hit = function (num1) {
		let hitPoints = num1;
		return this.health = this.health - hitPoints;
	};
};

export default Player;