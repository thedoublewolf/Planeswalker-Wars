
let Planeswalker = function () {
  this.health = 40;
  this.cards = function () {

  };
  this.hit = function (num) {
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};

export default Planeswalker;