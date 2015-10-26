(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Card = function Card(stats) {
  stats = stats || {};
  this.editions = stats.editions[0].image_url;
  this.name = stats.name;
  this.power = stats.power;
  this.toughness = stats.toughness;
};

Card.prototype.cardInstance = function () {
  return "\n\t\t<img class=\"magicCard1\" src=\"" + this.editions + "\">\n\t\t";
};

exports["default"] = Card;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Enemy = function Enemy() {
	this.health = 20;
	this.hit = function (num2) {
		var hitPoints = num2;
		return this.health = this.health - hitPoints;
	};
};

exports["default"] = Enemy;
module.exports = exports["default"];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var EnemyCard = function EnemyCard(stats) {
  stats = stats || {};
  this.editions = stats.editions[0].image_url;
  this.name = stats.name;
  this.power = stats.power;
  this.toughness = stats.toughness;
};

EnemyCard.prototype.cardInstance = function () {
  return "\n\t\t\t<img class=\"magicCard2\" src=\"" + this.editions + "\">\n\t\t\t";
};

exports["default"] = EnemyCard;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Player = function Player() {
	this.health = 20;
	this.hit = function (num1) {
		var hitPoints = num1;
		return this.health = this.health - hitPoints;
	};
};

exports["default"] = Player;
module.exports = exports["default"];

},{}],5:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

var _enemycard = require('./enemycard');

var _enemycard2 = _interopRequireDefault(_enemycard);

var _player = require('./player');

var _player2 = _interopRequireDefault(_player);

var _enemy = require('./enemy');

var _enemy2 = _interopRequireDefault(_enemy);

(function () {
  'use strict';

  describe('About the Player', function () {

    beforeEach(function () {
      window.x = new _player2['default']();
    });
    describe('creating a Player', function () {
      it('should create an instance of Player', function () {
        expect(x instanceof _player2['default']).to.equal(true);
      });
    });
    describe('player health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(20);
      });
    });
    describe('player hit points', function () {
      it('should be able to take damage', function () {
        x.hit();
        expect(x.health).to.be.below(20);
      });
    });
  });

  describe('About the Player\'s Deck', function () {

    beforeEach(function () {
      window.x = new _card2['default']();
    });
    describe('creating a Card', function () {
      it('should create an instance of a Card', function () {
        expect(x instanceof _card2['default']).to.equal(true);
      });
    });
  });

  describe('About the Enemy', function () {

    beforeEach(function () {
      window.x = new _enemy2['default']();
    });
    describe('creating an Enemy', function () {
      it('should create an instance of Enemy', function () {
        expect(x instanceof _enemy2['default']).to.equal(true);
      });
    });
    describe('enemy health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(20);
      });
    });
    describe('enemy hit points', function () {
      it('should be able to take damage', function () {
        x.hit(num2);
        expect(x.health).to.be.below(20);
      });
    });
  });

  describe('About the Enemy\'s Deck', function () {

    beforeEach(function () {
      window.x = new _enemycard2['default']();
    });
    describe('creating an Enemy Card', function () {
      it('should create an instance of an Enemy Card', function () {
        expect(x instanceof _enemycard2['default']).to.equal(true);
      });
    });
  });
})();

},{"./card":1,"./enemy":2,"./enemycard":3,"./player":4}]},{},[5])


//# sourceMappingURL=tests.js.map
