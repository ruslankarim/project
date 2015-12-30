'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectApp
 */
angular.module('projectApp')
  .controller('AutoCtrl', ['$scope', function($scope) {
    $scope.items = ['Физическое лицо', 'Юридическое лицо'];
    $scope.selection = $scope.items[0];
  }]);
