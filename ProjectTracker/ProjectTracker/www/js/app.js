// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.directives', 'starter.provides'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleLightContent();
                }
            });
        })
        .controller('notifiCtrl', function ($scope, $rootScope, $ionicPlatform, $cordovaLocalNotification) {

            $scope.add = function () {
                window.plugin.notification.local.add({
                    id: Math.floor(Math.random() * 1677721565846584),
                    title: "Test title",
                    text: "Test text for example"

                });
            };

            $scope.startService = function () {

                cordova.plugins.backgroundMode.setDefaults({text: 'Doing heavy tasks.'});

                cordova.plugins.backgroundMode.enable();
                cordova.plugins.backgroundMode.onactivate = function () {
                    setTimeout(function () {
                        window.plugin.notification.local.add({
                            id: Math.floor(Math.random() * 1677721565846584),
                            title: "Test title",
                            text: "Test text for example"

                        });
                    }, 30000);
                };
            };
            $scope.StopService = function () {
                cordova.plugins.backgroundMode.disable();
            };
        });

