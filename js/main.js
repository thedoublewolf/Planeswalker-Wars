import $ from 'jquery';
import _ from 'underscore';
import Card from './card';
import Enemy from './enemy';

// Zombie Creature Cards Array
let zombieURL = 'https://api.deckbrew.com/mtg/cards?name=zombie&type=creature';
let zombieDeck = [];
let zombieCardRequest = $.getJSON(zombieURL);

zombieCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		zombieDeck.push(deck);
	});

	console.log(zombieDeck);
});

// Draw cards from Zombie deck

function drawRandomZombie () {
	return zombieDeck[ Math.floor(Math.random() * zombieDeck.length) ];
};

function drawZombieCard () {
		var currentZombieCard = drawRandomZombie();
		if (currentZombieCard) {
			$('.magicCard').remove();
			$('#zombieDeck').append(currentZombieCard.toString());
	};
};
$('#btnDrawZombie').on('click', function (){
	drawZombieCard();
});

//-----------------------//

// Vampire Creature Cards Array
let vampireURL = 'https://api.deckbrew.com/mtg/cards?name=vampire&type=creature';
let vampireDeck = [];
let vampireCardRequest = $.getJSON(vampireURL);

vampireCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		vampireDeck.push(deck);
	});

	console.log(vampireDeck);
});

// Draw cards from Vampire deck

function drawRandomVampire () {
	return vampireDeck[ Math.floor(Math.random() * vampireDeck.length) ];
};
function drawVampireCard () {
		var currentVampireCard = drawRandomVampire();
		if (currentVampireCard) {
			$('#vampireDeck').append(currentVampireCard.toString());
	}
};
$('#btnDrawVampire').on('click', function (){
	drawVampireCard();
});

//-----------------------//

// Wolf Creature Cards Array
let	wolfURL = 'https://api.deckbrew.com/mtg/cards?name=wolf&type=creature';
let wolfDeck = [];
let wolfCardRequest = $.getJSON(wolfURL);

wolfCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		wolfDeck.push(deck);
	});

	console.log(wolfDeck);
});

// Draw cards from Wolf deck

function drawRandomWolf () {
	return wolfDeck[ Math.floor(Math.random() * wolfDeck.length) ];
};
function drawWolfCard () {
		var currentWolfCard = drawRandomWolf();
		if (currentWolfCard) {
			$('#wolfDeck').append(currentWolfCard.toString());
	}
};
$('#btnDrawWolf').on('click', function (){
	drawWolfCard();
});

//-----------------------//












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








