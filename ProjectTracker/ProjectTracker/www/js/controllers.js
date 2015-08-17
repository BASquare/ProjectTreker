angular.module('starter.controllers', [])



        //point from json file (use template map.html)
        .controller('BrowseCtrl', function ($scope, $http, $cordovaGeolocation) {

            $scope.name = "rhgrl";
            $http.get('coords.json').success(function (data) {

                $scope.maps = data;
                $scope.map = $scope.maps;
                //  console.log($scope.map.center.latitude);
                $scope.options = {scrollwheel: true};
                $scope.circles = [
                    {
                        id: 1,
                        center: {
                            latitude: $scope.map.center.latitude,
                            longitude: $scope.map.center.longitude
                        },
                        radius: $scope.map.radius,
                        stroke: {
                            color: '#08B21F',
                            weight: 2,
                            opacity: 0.2
                        },
                        fill: {
                            color: '#08B21F',
                            opacity: 0.5
                        },
                        geodesic: true, // optional: defaults to false
                        draggable: false, // optional: defaults to false
                        clickable: true, // optional: defaults to true
                        editable: true, // optional: defaults to false
                        visible: true, // optional: defaults to true
                        control: {}
                    }
                ];
                console.log($scope.map.radius);

                $scope.marker = {
                    id: 0,
                    coords: {
                        latitude: $scope.map.center.latitude,
                        longitude: $scope.map.center.longitude
                    },
                    options: {draggable: false}

                };

            });

        })
        //real point from device (use template hello.html)
        .controller('MapCtrl', function ($scope, $cordovaGeolocation) {

            //loaded slowly       
            $cordovaGeolocation
                    .getCurrentPosition()
                    .then(function (position) {
                        var lat = position.coords.latitude;
                        var long = position.coords.longitude;
                        $scope.map = {center: {latitude: lat, longitude: long}, zoom: 16};
                        console.log($scope.map);
                        $scope.marker = {
                            id: 0,
                            coords: {
                                latitude: lat,
                                longitude: long
                            },
                            options: {draggable: false}

                        };
                        $scope.circles = [
                            {
                                id: 1,
                                center: {
                                    latitude: lat,
                                    longitude: long
                                },
                                radius: 100,
                                stroke: {
                                    color: '#08B21F',
                                    weight: 2,
                                    opacity: 0.2
                                },
                                fill: {
                                    color: '#08B21F',
                                    opacity: 0.5
                                },
                                geodesic: true, // optional: defaults to false
                                draggable: false, // optional: defaults to false
                                clickable: true, // optional: defaults to true
                                editable: true, // optional: defaults to false
                                visible: true, // optional: defaults to true
                                control: {}
                            }
                        ];

                    }, function (err) {
                        // error
                    });
        });
