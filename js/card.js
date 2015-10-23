let Card = function (stats) {
  stats = stats || {};
  // this.editions = stats.editions;
  this.editions = stats.editions[0].image_url;
  this.name = stats.name;
  this.power = stats.power;
  this.toughness = stats.toughness;  
};
export default Card;