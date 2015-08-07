angular.module('starter.controllers', [])

        .controller('MapCtrl', function ($scope, $ionicLoading) {
            $scope.mapCreated = function (map) {
                $scope.map = map;
            };

            navigator.geolocation.getCurrentPosition(function (pos) {
                console.log('Got pos', pos);
                $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            }, function (error) {
                alert('Unable to get location: ' + error.message);
            });
            // };
        });
