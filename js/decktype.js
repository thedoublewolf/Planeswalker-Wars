let decktype = {
	decklist: function (stats) {
		return `
			<p>${stats.name}</p>
			<p>${stats.power}</p>
			<p>${stats.toughness}</p>
			<img src="${stats.editions}">

			`;
	}
}

export default decktype;