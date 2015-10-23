let Card = function (stats) {
  stats = stats || {};
  this.editions = stats.editions;
  this.name = stats.name;
  this.id = stats.id;
  this.power = stats.power;
  this.toughness = stats.toughness; 
}; 

export default Card;