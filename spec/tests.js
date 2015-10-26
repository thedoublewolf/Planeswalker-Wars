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
// import Planeswalker from './planeswalker';
// import Enemy from './enemy';
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

(function () {
  'use strict';

  //   describe('About the Planeswalker', function() {

  //     beforeEach( function() {
  //       window.x = new Planeswalker();
  //     });

  //     describe('creating a Planeswalker', function() {
  //       it('should create an instance of Planeswalker', function () {
  //         expect(x instanceof Planeswalker).to.equal(true);
  //       });
  //     });

  //     describe('my player health', function() {
  //       it('should have full health upon creation', function() {
  //         expect(x.health).to.equal(40);
  //       });
  //     });

  //     describe('player taking damage', function() {
  //       it('should lower the score, after getting hit', function() {
  //         x.hit();
  //         expect(x.health).to.be.below(40);
  //       });
  //     });

  //     describe('player has cards', function() {
  //     	it('should have a unique deck of cards', function() {

  //     	});
  //     });

  //   });

  //   describe('About the Enemy', function() {

  // 	  beforeEach( function() {
  // 	    window.x = new Enemy();
  // 	  });

  // 	  describe('creating an Enemy', function() {
  // 	    it('should create an instance of Enemy', function () {
  // 	      expect(x instanceof Enemy).to.equal(true);
  // 	    });
  // 	  });

  // 	  describe('enemy health', function() {
  // 	    it('should have full health upon creation', function() {
  // 	      expect(x.health).to.equal(40);
  // 	    });
  // 	  });

  // 	  describe('enemy taking damage', function() {
  // 	    it('should lower the score, after getting hit', function() {
  // 	      x.hit();
  // 	      expect(x.health).to.be.below(40);
  // 	    })
  // 	  });

  //     describe('player has cards', function() {
  //     	it('should have a unique deck of cards', function() {

  //     	});
  //     });

  // });

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

},{"./card":1}]},{},[2])


//# sourceMappingURL=tests.js.map
