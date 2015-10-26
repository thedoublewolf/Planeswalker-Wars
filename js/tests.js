import Card from './card';
import EnemyCard from './enemycard';
import Player from './player';
import Enemy from './enemy';

(function() {
  'use strict';

  describe('About the Player', function() {

    beforeEach( function() {
      window.x = new Player();
    });
    describe('creating a Player', function() {
      it('should create an instance of Player', function () {
        expect(x instanceof Player).to.equal(true);
      });
    });
    describe('player health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(20);
      });
    });
    describe('player hit points', function() {
      it('should be able to take damage', function() {
        x.hit();
        expect(x.health).to.be.below(20);
      });
    });

  });

  describe('About the Player\'s Deck', function() {

    beforeEach( function() {
      window.x = new Card();
    });
    describe('creating a Card', function() {
      it('should create an instance of a Card', function () {
        expect(x instanceof Card).to.equal(true);
      });
    });

  });

  describe('About the Enemy', function() {

    beforeEach( function() {
      window.x = new Enemy();
    });
    describe('creating an Enemy', function() {
      it('should create an instance of Enemy', function () {
        expect(x instanceof Enemy).to.equal(true);
      });
    });
    describe('enemy health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(20);
      });
    });
    describe('enemy hit points', function() {
      it('should be able to take damage', function() {
        x.hit(num2);
        expect(x.health).to.be.below(20);
      });
    });

  });

  describe('About the Enemy\'s Deck', function() {

    beforeEach( function() {
      window.x = new EnemyCard();
    });
    describe('creating an Enemy Card', function() {
      it('should create an instance of an Enemy Card', function () {
        expect(x instanceof EnemyCard).to.equal(true);
      });
    });

  });

}());