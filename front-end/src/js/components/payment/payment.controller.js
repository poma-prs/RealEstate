'use strict'

angular.module('realestateApp.payment')
  .controller('PaymentController', ['$scope', function($scope) {
    var titles = [
      'Realestate.com.ua Pricing Guide',
      'Pricing for <span>CustomID</span> Some real estate agency name - #248851',
      'Lead pricing for <span>CustomID</span> Some real estate agency name - #248851',
      'Complete Payment for order <span>#654985494</span>'
    ];

    var subtitle = [
      'Please enter Your Agent ID to see your contracted pricing.',
      'Prices is based on the suburb in which your listing is located, please enter the suburb below.',
      'The pricing below is based on your current contract.',
      'Please fill your card details'
    ];

    $scope.getTitle = function(mode) {
      return titles[mode-1];
    }

    $scope.getSubtitle = function(mode) {
      return subtitle[mode-1];
    }

    $scope.formModel = {
      agencyId: 'My Agency ID',
      suburbName: 'Richmond, VIC 3121',
      purchaseLeads: 10000,
    };
  }]);
