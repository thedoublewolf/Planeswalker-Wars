let Enemy = function () {
	this.health = 20;
	this.hit = function (num2) {
		let hitPoints = num2;
		return this.health = this.health - hitPoints;
	};
};

export default Enemy;