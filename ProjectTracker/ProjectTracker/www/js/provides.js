/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
<<<<<<< HEAD
angular.module('provides', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            /******************************PROVIDERS****************************/
            $stateProvider.state('map', {
                url: '/map',
                templateUrl: 'templates/map.html'
                        //controller :'MapCtrl'
=======
angular.module('starter.provides', [])
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state('map', {
                url: '/map',
                templateUrl: 'templates/map.html'
                       
>>>>>>> origin/master
            });
            $stateProvider.state('hello', {
                url: '/hello',
                templateUrl: 'templates/hello.html'
<<<<<<< HEAD
                        //controller :'MapCtrl'
=======
                 
>>>>>>> origin/master
            });
            $stateProvider.state('index', {
                url: '/index',
                templateUrl: 'index.html'
<<<<<<< HEAD
                        //controller :'MapCtrl'
            });
            $urlRouterProvider.otherwise('/');
=======
         
            });
            $urlRouterProvider.otherwise('index.html');
>>>>>>> origin/master
        });

