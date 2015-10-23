import Planeswalker from './planeswalker';
import Enemy from './enemy';
import Card from './card';

(function() {
  'use strict';

  describe('About the Planeswalker', function() {

    beforeEach( function() {
      window.x = new Planeswalker();
    });

    describe('creating a Planeswalker', function() {
      it('should create an instance of Planeswalker', function () {
        expect(x instanceof Planeswalker).to.equal(true);
      });
    });

    describe('my player health', function() {
      it('should have full health upon creation', function() {
        expect(x.health).to.equal(40);
      });
    });

    describe('player taking damage', function() {
      it('should lower the score, after getting hit', function() {
        x.hit();
        expect(x.health).to.be.below(40);
      });
    });

    describe('player has cards', function() {
    	it('should have a unique deck of cards', function() {

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
	      expect(x.health).to.equal(40);
	    });
	  });

	  describe('enemy taking damage', function() {
	    it('should lower the score, after getting hit', function() {
	      x.hit();
	      expect(x.health).to.be.below(40);
	    })
	  });

    describe('player has cards', function() {
    	it('should have a unique deck of cards', function() {

    	});
    });

});

  describe('About the Card', function() {

  	beforeEach( function() {
  		window.x = new Card();
  	});

  	describe('create a deck of cards', function() {
  		it('should create an instance of a deck of cards', function () {
  			expect(x instanceof Card).to.equal(true);
  		});
  	});

  });

}());


// Planeswalker

// Enemy

// Both will have a unique deck of cards
// Both will have attack methods
// Both will have health