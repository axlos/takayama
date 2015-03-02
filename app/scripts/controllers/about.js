'use strict';

/**
 * @ngdoc function
 * @name takayamaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the takayamaApp
 */
angular.module('takayamaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
