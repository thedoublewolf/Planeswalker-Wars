let EnemyCard = function (stats) {
  stats = stats || {};
  this.editions = stats.editions[0].image_url;
  this.name = stats.name;
  this.power = stats.power;
  this.toughness = stats.toughness;
};

EnemyCard.prototype.cardInstance = function () {
	return `
			<img class="magicCard2" src="${this.editions}">
			`;
};

export default EnemyCard;