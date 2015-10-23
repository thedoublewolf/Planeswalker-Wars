import $ from 'jquery';
import _ from 'underscore';

import Planeswalker from './planeswalker';
import Enemy from './enemy';
import Card from './card';
import decktype from './decktype';

// Zombie Creature Cards Array
let zombieURL = 'https://api.deckbrew.com/mtg/cards?name=zombie&type=creature';
let zombieDeck = [];
let zombieCardRequest = $.getJSON(zombieURL);

zombieCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		zombieDeck.push(deck);
		$('.zombieDeck').append(decktype.decklist(deck));
	});

	console.log(zombieDeck);
});

// Vampire Creature Cards Array
let vampireURL = 'https://api.deckbrew.com/mtg/cards?name=vampire&type=creature';
let vampireDeck = [];
let vampireCardRequest = $.getJSON(vampireURL);

vampireCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		vampireDeck.push(deck);
		// $('.vampireDeck').append(decktype.decklist(deck));
	});

	console.log(vampireDeck);
});

// Wolf Creature Cards Array
let	wolfURL = 'https://api.deckbrew.com/mtg/cards?name=wolf&type=creature';
let wolfDeck = [];
let wolfCardRequest = $.getJSON(wolfURL);

wolfCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		wolfDeck.push(deck);
		// $('.wolfDeck').append(decktype.decklist(deck));
	});

	console.log(wolfDeck);
});

// Golem Creature Cards Array
let	golemURL = 'https://api.deckbrew.com/mtg/cards?name=golem&type=creature';
let golemDeck = [];
let golemCardRequest = $.getJSON(golemURL);

golemCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		golemDeck.push(deck);
		// $('.golemDeck').append(decktype.decklist(deck));
	});

	console.log(golemDeck);
});
















// // Good Guy Instance
// let Gideon = new Planeswalker();

// // Bad Guy Instance
// let Jace = new Enemy();


// // DOM Nodes Selected
// let ggHealth = $('.ggHealth');
// let bgHealth = $('.bgHealth');

// let ggAttack = $('.ggAttack');

// // Show current (default) health
// ggHealth.text(Gideon.health);
// bgHealth.text(Jace.health);


// // Setting up ON Events
// ggAttack.on('click', function () {

//   // Generate a random amount of hit points
//   // Then attack!!!
//   let num = _.random(0, 25);
//   Jace.hit(num);

//   if (Jace.health <= 0) {
//     bgHealth.text('Defeated');
//     alert('Mario Wins!!')
//   } else {
//     bgHealth.text(Jace.health);
//     alert('Bowser Fights Back!!!');
//     Gideon.hit(10);
//     ggHealth.css('color', 'red');
//     ggHealth.text(Gideon.health);
//     setTimeout( function () {
//       ggHealth.css('color', 'black');
//     }, 1000);
//   }

//   console.log(Jace);
// });








