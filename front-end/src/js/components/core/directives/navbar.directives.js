'use strict'

angular
  .module('realestateApp')
  .directive('navBar', [function() {
    return {
      templateUrl: 'views/core/navbar.directive.html',
      restrict: 'EA'
    };
  }]);
