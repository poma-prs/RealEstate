'use strict';

angular
  .module('realestateApp')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/index.html',
        controller: 'HomeController'
      })
      .when('/payment', {
        templateUrl: 'views/payment/index.html',
        controller: 'PaymentController'
      });
  }]);
