import $ from 'jquery';
import _ from 'underscore';
import Card from './card';
import EnemyCard from './enemycard';
import Player from './player';
import Enemy from './enemy';

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

		let num1 = currentZombieCard.power;
		enemyVampire.hit(num1);
		// $('.hitbox2text').append(num1);
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

		let num2 = currentEnemyVampireCard.power;
		zombie.hit(num2);
		// $('.hitbox1text').append(num2);
	};
};

// Player and Enemy Instances
let zombie = new Player();
let enemyVampire = new Enemy();

// DOM Nodes Selected
let playerHealth = $('.playerHealth');
let enemyHealth = $('.enemyHealth');

// Show current (default) health and hitpoints
playerHealth.text(zombie.health);
enemyHealth.text(enemyVampire.health);

// Setting up ON Events
$('#btnDrawZombie').on('click', function (){
	drawZombieCard(),
	drawEnemyVampireCard();

	if (enemyVampire.health <= 20) {
		enemyHealth.text(enemyVampire.health);
	}; 
	if (zombie.health <= 20) {
		playerHealth.text(zombie.health);
	};
	if (enemyVampire.health <= 0) {
		enemyHealth.text('0');
	};
	if (zombie.health <= 0) {
		playerHealth.text('0');
	};
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
			
			let num1 = currentVampireCard.power;
			enemyWolf.hit(num1);
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

		let num2 = currentEnemyWolfCard.power;
		vampire.hit(num2);
	};
};

// Player and Enemy Instances
let vampire = new Player();
let enemyWolf = new Enemy();

// DOM Nodes Selected
let player2Health = $('.player2Health');
let enemy2Health = $('.enemy2Health');

// Show current (default) health and hitpoints
player2Health.text(vampire.health);
enemy2Health.text(enemyWolf.health);

$('#btnDrawVampire').on('click', function (){
	drawVampireCard(),
	drawEnemyWolfCard();

	if (enemyWolf.health <= 20) {
		enemy2Health.text(enemyWolf.health);
	}; 
	if (vampire.health <= 20) {
		player2Health.text(vampire.health);
	};
	if (enemyWolf.health <= 0) {
		enemy2Health.text('0');
	};
	if (vampire.health <= 0) {
		player2Health.text('0');
	};
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

			let num1 = currentWolfCard.power;
			enemyZombie.hit(num1);
	};
};

function drawRandomEnemyZombie () {
	return enemyZombieDeck[ Math.floor(Math.random() * enemyZombieDeck.length) ];
};
function drawEnemyZombieCard () {
		var currentEnemyZombieCard = drawRandomEnemyZombie();
		if (currentEnemyZombieCard) {
			$('.magicCard2').remove();
			$('.player2Card').append(currentEnemyZombieCard.cardInstance());

		let num2 = currentEnemyZombieCard.power;
		wolf.hit(num2);
	};
};

// Player and Enemy Instances
let wolf = new Player();
let enemyZombie = new Enemy();

// DOM Nodes Selected
let player3Health = $('.player3Health');
let enemy3Health = $('.enemy3Health');

// Show current (default) health and hitpoints
player3Health.text(wolf.health);
enemy3Health.text(enemyZombie.health);

$('#btnDrawWolf').on('click', function (){
	drawWolfCard(),
	drawEnemyZombieCard();

	if (enemyZombie.health <= 20) {
	enemy3Health.text(enemyZombie.health);
	}; 
	if (wolf.health <= 20) {
		player3Health.text(wolf.health);
	};
	if (enemyZombie.health <= 0) {
		enemy3Health.text('0');
	};
	if (wolf.health <= 0) {
		player3Health.text('0');
	};
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






























