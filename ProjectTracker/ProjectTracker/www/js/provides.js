/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('provides', [])
        .config(function ($stateProvider, $urlRouterProvider) {
            /******************************PROVIDERS****************************/
            $stateProvider.state('map', {
                url: '/map',
                templateUrl: 'templates/map.html'
                        //controller :'MapCtrl'
            });
            $stateProvider.state('hello', {
                url: '/hello',
                templateUrl: 'templates/hello.html'
                        //controller :'MapCtrl'
            });
            $stateProvider.state('index', {
                url: '/index',
                templateUrl: 'index.html'
                        //controller :'MapCtrl'
            });
            $urlRouterProvider.otherwise('/');
        });

