// Ionic Starter App


 angular.module('starter', ['ionic','ngCordova'])
  /*************************/
     .controller('MapCtrl', function($scope, $ionicLoading, $compile,$cordovaGeolocation) {
      function initialize() {
            var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      return lat;
      return long;
    }, function(err) {
      // error
    });
  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false 
  };
  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
    $scope.point = function(position) {
       var lat  = position.coords.latitude;
       var long = position.coords.longitude;
       var myLat = new google.maps.LatLng(lat,long);
     
      var mapOptions = {
          center: myLatlng,
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
          position: myLatlng,
          map: map,
          title: 'Lviv'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });

        //$scope.map = map;
        //console.log(map.center);
  });
 navigator.geolocation.getCurrentPosition($scope.point);
 // navigator.geolocation.getCurrentPosition($scope.point); 
 //google.maps.event.addDomListener(window, 'load', initialize);
      var myLatlng = new google.maps.LatLng(49.813034200000004,24.062413);
      var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);

        $scope.map = map;
      console.log(map.center);
      }
      
    google.maps.event.addDomListener(window, 'load', initialize);
      
   
      
    
    })
 
 
 
 /*************************/
/*.controller('GeoCtrl', function( $scope, $cordovaGeolocation, $ionicPlatform) {
    $ionicPlatform.ready(function(){
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
    }, function(err) {
      // error
    });


  var watchOptions = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: false // may cause errors if true
  };

  var watch = $cordovaGeolocation.watchPosition(watchOptions);
  watch.then(
    null,
    function(err) {
      // error
    },
   function (position) {
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
      console.log(lat);
      console.log(long);
     
    var myLatlng = new google.maps.LatLng(lat, long);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   

  });
    });
 
//$scope.map = { center: { latitude: 49.813034200000004, longitude: 24.062413 }, zoom: 8 };
$scope.href = 'http://maps.google.com/?q=49.8130284,24.062399199999998';
 //console.log(lat);
      //console.log(long);
 /* watch.clearWatch();
  // OR
  $cordovaGeolocation.clearWatch(watch)
    .then(function(result) {
      // success
      }, function (error) {
      // error
    });*/

//})
       

        //http://maps.google.com/?q=49.8130284,24.062399199999998
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
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


