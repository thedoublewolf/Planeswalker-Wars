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

Card.prototype.toString = function () {
  return "\n\t\t\t<img class=\"magicCard\" src=\"" + this.editions + "\">\n\t\t\t";
};

exports["default"] = Card;
module.exports = exports["default"];

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Enemy = function Enemy() {
  this.health = 40;
  this.cards = function () {};
  this.hit = function (num) {
    var hitPoints = num || 10;
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

var Planeswalker = function Planeswalker() {
  this.health = 40;
  this.cards = function () {};
  this.hit = function (num) {
    var hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};

exports["default"] = Planeswalker;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _planeswalker = require('./planeswalker');

var _planeswalker2 = _interopRequireDefault(_planeswalker);

var _enemy = require('./enemy');

var _enemy2 = _interopRequireDefault(_enemy);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

(function () {
  'use strict';

  describe('About the Planeswalker', function () {

    beforeEach(function () {
      window.x = new _planeswalker2['default']();
    });

    describe('creating a Planeswalker', function () {
      it('should create an instance of Planeswalker', function () {
        expect(x instanceof _planeswalker2['default']).to.equal(true);
      });
    });

    describe('my player health', function () {
      it('should have full health upon creation', function () {
        expect(x.health).to.equal(40);
      });
    });

    describe('player taking damage', function () {
      it('should lower the score, after getting hit', function () {
        x.hit();
        expect(x.health).to.be.below(40);
      });
    });

    describe('player has cards', function () {
      it('should have a unique deck of cards', function () {});
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
        expect(x.health).to.equal(40);
      });
    });

    describe('enemy taking damage', function () {
      it('should lower the score, after getting hit', function () {
        x.hit();
        expect(x.health).to.be.below(40);
      });
    });

    describe('player has cards', function () {
      it('should have a unique deck of cards', function () {});
    });
  });

  describe('About the Card', function () {

    beforeEach(function () {
      window.x = new _card2['default']();
    });

    describe('create a deck of cards', function () {
      it('should create an instance of a deck of cards', function () {
        expect(x instanceof _card2['default']).to.equal(true);
      });
    });
  });
})();

// Planeswalker

// Enemy

// Both will have a unique deck of cards
// Both will have attack methods
// Both will have health

},{"./card":1,"./enemy":2,"./planeswalker":3}]},{},[4])


//# sourceMappingURL=tests.js.map
