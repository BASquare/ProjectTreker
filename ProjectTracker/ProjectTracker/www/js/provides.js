/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter.provides', ['uiGmapgoogle-maps', 'ngCordova'])
        .config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
                v: '3.17',
                libraries: 'weather,geometry,visualization',
                language: 'en',
                sensor: 'false'
            });

            $stateProvider.state('map', {
                url: '/map',
                templateUrl: 'templates/map.html'
                       
            });
            $stateProvider.state('hello', {
                url: '/hello',
                templateUrl: 'templates/hello.html',
                //controller: 'MapCtrl'
                 
            });
            $stateProvider.state('index', {
                url: '/index',
                templateUrl: 'index.html'
         
            });
            $urlRouterProvider.otherwise('index.html');
        });


