angular.module('starter.directives', [])

        .directive('map', function () {
            return {
                restrict: 'E',
                scope: {
                    onCreate: '&'
                },
                link: function ($scope, $element, $attr) {
                    function initialize() {
                        $scope.point = function (position) {
                            $scope.lat = position.coords.latitude;
                            $scope.long = position.coords.longitude;
                        };
                        var mapOptions = {
                            center: new google.maps.LatLng($scope.point),
                            zoom: 16,
                            mapTypeId: google.maps.MapTypeId.ROADMAP
                        };
                        var map = new google.maps.Map($element[0], mapOptions);

                        $scope.onCreate({map: map});

  
                        google.maps.event.addDomListener($element[0], 'mousedown', function (e) {
                            e.preventDefault();
                            return false;
                        });
                    }

                    if (document.readyState === "complete") {
                        initialize();
                    } else {
                        google.maps.event.addDomListener(window, 'load', initialize);
                    }
                }
            };
        });
