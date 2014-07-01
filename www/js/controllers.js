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
	        latitude: 48.856614,
	        longitude: 2.352221900000017700
	    },
	   
	    zoom: 10
	}
	$scope.options = {scrollwheel: false};

  

	$scope.myMarkers = [
		{
			name: 'Hotel eden opera paris',
			icon: "img/blue_marker.png",
			show: false,
			latitude: 48.856614,
			longitude: 2.352221900000017700
		},
		{
			name: 'Mercure Paris Massy Gare TGV',
			icon: "img/blue_marker.png",
			show: false,
			latitude: 48.7270438,
			longitude: 2.2638262
		},
		{
			name: 'Hôtel de Ville',
			icon: "img/blue_marker.png",
			show: false,
			latitude: 48.8601,
			longitude: 2.3507
		},
		{
			name: 'Place de la Porte de Versailles',
			icon: "img/blue_marker.png",
			show: false,
			latitude: 48.832514700000000000,
			longitude: 2.287249599999995500
		}

	];

	  	$scope.markers = $scope.myMarkers;
	  	$scope.markers.onClick = function() {
	  		alert("onclick");
                console.log("Clicked!");
                $scope.markers.show = true;
                $scope.$apply();
            };
	  	$scope.fit = true;

	  
           
});



