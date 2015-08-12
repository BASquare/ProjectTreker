<<<<<<< HEAD
// Ionic Starter App


angular.module('starter', ['ionic', 'ngCordova', 'provides'])

        .controller('MapCtrl', function ($scope, $compile, $cordovaGeolocation) {
            function initialize() {
                var posOptions = {timeout: 10000, enableHighAccuracy: false};
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
                var watch = $cordovaGeolocation.watchPosition(watchOptions);
                watch.then(
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
                            var sunCircle = {
                                strokeColor: "#c3fc49",
                                strokeOpacity: 0.8,
                                strokeWeight: 2,
                                fillColor: "#c3fc49",
                                fillOpacity: 0.35,
                                map: map,
                                center: myLat,
                                radius: 100
                            };
                            cityCircle = new google.maps.Circle(sunCircle);
                            cityCircle.bindTo('center', marker, 'position');
                            google.maps.event.addListener(marker, 'click', function () {
                                infowindow.open(map, marker);
                            });

                            $scope.map = map;
                            //console.log(map.center);
                        });
                navigator.geolocation.getCurrentPosition($scope.point);
            }

            google.maps.event.addDomListener(window, 'load', initialize);
            initialize();

        })


        .run(function ($ionicPlatform) {
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


=======
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.provides'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
>>>>>>> origin/master
