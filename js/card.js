let Card = function (stats) {
  stats = stats || {};
  this.editions = stats.editions[0].image_url;
  this.name = stats.name;
  this.power = stats.power;
  this.toughness = stats.toughness;
};

Card.prototype.cardInstance = function () {
	return `
			<img class="magicCard1" src="${this.editions}">
			`;
};

export default Card;