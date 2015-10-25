import $ from 'jquery';
import _ from 'underscore';
import Card from './card';
import EnemyCard from './enemycard';

//-----------------------//

// Zombie Creature Cards Array
let zombieURL = 'https://api.deckbrew.com/mtg/cards?name=zombie&type=creature';
let zombieDeck = [];
let zombieCardRequest = $.getJSON(zombieURL);

zombieCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new Card(card);
		zombieDeck.push(deck);
	});
});

// Enemy Vampire Cards Array
let enemyVampireURL = 'https://api.deckbrew.com/mtg/cards?name=vampire&type=creature';
let enemyVampireDeck = [];
let enemyVampireCardRequest = $.getJSON(enemyVampireURL);

enemyVampireCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new EnemyCard(card);
		enemyVampireDeck.push(deck);
	});
});

// Draw cards from Zombie deck and Enemy Vampire deck

function drawRandomZombie () {
	return zombieDeck[ Math.floor(Math.random() * zombieDeck.length) ];
};
function drawZombieCard () {
	var currentZombieCard = drawRandomZombie();
	if (currentZombieCard) {
		$('.magicCard1').remove();
		$('.player1Card').append(currentZombieCard.cardInstance());
	};
};

function drawRandomEnemyVampire () {
	return enemyVampireDeck[ Math.floor(Math.random() * enemyVampireDeck.length) ];
};
function drawEnemyVampireCard () {
	var currentEnemyVampireCard = drawRandomEnemyVampire();
	if (currentEnemyVampireCard) {
		$('.magicCard2').remove();
		$('.player2Card').append(currentEnemyVampireCard.cardInstance());
	};
};

$('#btnDrawZombie').on('click', function (){
	drawZombieCard(),
	drawEnemyVampireCard();
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
});

// Enemy Wolf Cards Array
let	enemyWolfURL = 'https://api.deckbrew.com/mtg/cards?name=wolf&type=creature';
let enemyWolfDeck = [];
let enemyWolfCardRequest = $.getJSON(enemyWolfURL);

enemyWolfCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new EnemyCard(card);
		enemyWolfDeck.push(deck);
	});
});

// Draw cards from Vampire deck and Enemy Wolf deck

function drawRandomVampire () {
	return vampireDeck[ Math.floor(Math.random() * vampireDeck.length) ];
};
function drawVampireCard () {
		var currentVampireCard = drawRandomVampire();
		if (currentVampireCard) {
			$('.magicCard1').remove();
			$('.player1Card').append(currentVampireCard.cardInstance());
	};
};

function drawRandomEnemyWolf () {
	return enemyWolfDeck[ Math.floor(Math.random() * enemyWolfDeck.length) ];
};
function drawEnemyWolfCard () {
		var currentEnemyWolfCard = drawRandomEnemyWolf();
		if (currentEnemyWolfCard) {
			$('.magicCard2').remove();
			$('.player2Card').append(currentEnemyWolfCard.cardInstance());
	};
};

$('#btnDrawVampire').on('click', function (){
	drawVampireCard(),
	drawEnemyWolfCard();
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
});

// Enemy Zombie Cards Array
let enemyZombieURL = 'https://api.deckbrew.com/mtg/cards?name=zombie&type=creature';
let enemyZombieDeck = [];
let enemyZombieCardRequest = $.getJSON(zombieURL);

enemyZombieCardRequest.then( function (response) {
	_.each(response, function (card) {

		let deck = new EnemyCard(card);
		enemyZombieDeck.push(deck);
	});
});

// Draw cards from Wolf deck and Enemy Zombie deck

function drawRandomWolf () {
	return wolfDeck[ Math.floor(Math.random() * wolfDeck.length) ];
};
function drawWolfCard () {
		var currentWolfCard = drawRandomWolf();
		if (currentWolfCard) {
			$('.magicCard1').remove();
			$('.player1Card').append(currentWolfCard.cardInstance());
	}
};

function drawRandomEnemyZombie () {
	return enemyZombieDeck[ Math.floor(Math.random() * enemyZombieDeck.length) ];
};
function drawEnemyZombieCard () {
		var currentEnemyZombieCard = drawRandomEnemyZombie();
		if (currentEnemyZombieCard) {
			$('.magicCard2').remove();
			$('.player2Card').append(currentEnemyZombieCard.cardInstance());
	};
};

$('#btnDrawWolf').on('click', function (){
	drawWolfCard(),
	drawEnemyZombieCard();
});

//-----------------------//

// Deck loader

$('#zombieDeck').on('click', function (event){
	$('#deckScreen').removeClass('shown').addClass('hidden');
	$('#zombieScreen').removeClass('hidden').addClass('shown');
});

$('#vampireDeck').on('click', function (event){
	$('#deckScreen').removeClass('shown').addClass('hidden');
	$('#vampireScreen').removeClass('hidden').addClass('shown');
});

$('#wolfDeck').on('click', function (event){
	$('#deckScreen').removeClass('shown').addClass('hidden');
	$('#wolfScreen').removeClass('hidden').addClass('shown');
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








