// Ionic Starter App


angular.module('starter', ['ionic', 'ngCordova'])
 /*************************/
	.controller('MapCtrl', function ($scope, $compile, $cordovaGeolocation) {
		function initialize() {
			var posOptions = { timeout: 10000, enableHighAccuracy: false };
			$cordovaGeolocation
			  .getCurrentPosition(posOptions)
			  .then(function (position) {
			  	var lat = position.coords.latitude;
			  	var long = position.coords.longitude;
			  	return lat;
			  	return long;
			  }, function (err) {
			  	// error
			  });
			var watchOptions = {
				frequency: 1000,
				timeout: 3000,
				enableHighAccuracy: false
			};
			$cordovaGeolocation.watchPosition(watchOptions).then(
			  null,
			  function (err) {
			  	// error
			  },
			  $scope.point = function (position) {
			  	var lat = position.coords.latitude;
			  	var long = position.coords.longitude;

			  	var myLat = new google.maps.LatLng(lat, long);

			  	var mapOptions = {
			  		center: myLat,
			  		zoom: 16,
			  		mapTypeId: google.maps.MapTypeId.ROADMAP
			  	};
			  	var map = new google.maps.Map(document.getElementById("map"),
					mapOptions);

			  	var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
			  	var compiled = $compile(contentString)($scope);

			  	var infowindow = new google.maps.InfoWindow({
			  		content: compiled[0]
			  	});
			  	var marker = new google.maps.Marker({
			  		position: myLat,
			  		map: map,
			  		title: 'Lviv'
			  	});
			  	google.maps.event.addListener(marker, 'click', function () {
			  		infowindow.open(map, marker);
			  	});

			  	$scope.map = map;
			  	console.log(map.center);
			  });
			navigator.geolocation.getCurrentPosition($scope.point);


		}

		google.maps.event.addDomListener(window, 'load', initialize);

	}).run(function ($ionicPlatform) {
		$ionicPlatform.ready(function () {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);

			}
			if (window.StatusBar) {
				// org.apache.cordova.statusbar required
				StatusBar.styleLightContent();
			}
		});
});


