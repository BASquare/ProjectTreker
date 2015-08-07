/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.provides', [])
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state('map', {
                url: '/map',
                templateUrl: 'templates/map.html'
                       
            });
            $stateProvider.state('hello', {
                url: '/hello',
                templateUrl: 'templates/hello.html'
                 
            });
            $stateProvider.state('index', {
                url: '/index',
                templateUrl: 'index.html'
         
            });
            $urlRouterProvider.otherwise('index.html');
        });

