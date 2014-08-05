angular.module('myApp.services').factory('hotelsProvider', function() {
	var hotels = [{
		name: 'Taj Westend',
		price: 17000,
		location: 'Race Course Road',
		imgUrl: 'kVIGWsz.jpg',
		url: 'http://www.theleela.com/',
		availableForBook: false,
		description: 'Incoherently newt hound '
	}, {
		name: 'Keys Hotel',
		price: 8000,
		location: 'Whitefield',
		imgUrl: 'OqJMuy5.jpg',
		availableForBook: true,
		description: 'Irresolutely and oh across wherever oh goodness more wallaby a some much reindeer octopus overcast howled far far honey tamarin a ouch inventoried distinct wombat egregious deceptive conservative alas.'
	}, {
		name: 'Leela Palace',
		price: 20000,
		location: 'Old Airport Road',
		imgUrl: 'qA4PCDl.jpg',
		availableForBook: true,
		description: 'Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.'
	}, {
		name: 'Alila',
		price: 20000,
		location: 'Whitefield',
		imgUrl: 'qA4PCDl.jpg',
		availableForBook: true,
		description: 'Llama crab credible wow reproachfully brave apart dived rugged this hey luscious obediently pert taped smug crud learned thus arousingly or jeepers as before pill save jeez cunning jeez some pointed near house imprecise chose.'
	}];

	return {
		getHotels: function() {
			return hotels;
		},
		addHotel: function(hotel) {
			hotels.push(hotel);
		}
	};
});