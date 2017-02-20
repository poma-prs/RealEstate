'use strict';

angular
  .module('realestateApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home/index.html',
        controller: 'HomeController',
        routeTitle: 'Real Estate'
      });
  }]);
