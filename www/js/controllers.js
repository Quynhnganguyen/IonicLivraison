angular.module('starter.controllers', [])

.controller('ListCtrl', function($scope){
	$scope.livreurList = [
		{nom: "Nguyen", etat: "En cours", tel: "0213456789", img:'abc.jpg'},
		{nom: "Nguyen", etat: "En cours", tel: "0213456789", img:'abc.jpg'},
		{nom: "Nguyen", etat: "En cours", tel: "0213456789", img:'abc.jpg'},
		{nom: "Nguyen", etat: "En cours", tel: "0213456789", img:'abc.jpg'},
		{nom: "Nguyen", etat: "En cours", tel: "0213456789", img:'abc.jpg'}
		
	]
})
.controller('MapCtrl', function($scope) {
	$scope.map = {
	    center: {
	        latitude: 45,
	        longitude: -73
	    },
	   
	    zoom: 10
	}

	$scope.marker = {
		name: 'Hotel eden opera paris',
		latitude: 48.856614,
		longitude: 2.352221900000017700
	};
});



