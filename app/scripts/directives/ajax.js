'use strict';

angular.module('inspinia')
.directive('ajax', function () {
  return {
    restrict: 'E',
    scope: {
    },
    template: '<div id="ajax" class="center-block text-center m-t-lg ajax"><img alt="image" src="images/ajax-loader.gif"></div>',
    controller: ['$scope', function (scope) {

      console.log('asdad');

      scope.$on('hideAjax', function(event) {
        $("#ajax").hide();
        console.log('hide llamado');
      });

      scope.$on('showAjax', function(event) {
        $("#ajax").show();
      });

    }]
  };
});
