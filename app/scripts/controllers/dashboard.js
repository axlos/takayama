function DashboardCtrl($scope, $interval, Avatar, Graph, Dashboard) {

  $scope.$broadcast('showAjax');

  $scope.loadAvatars = function() {
    Avatar.query({}, function (data){
      $scope.avatars = data;
      $scope.$broadcast('hideAjax');
    });
  };

  $scope.loadGraph = function() {
    $scope.graph = Graph.get();
  };

  $scope.loadOptions = function() {
    Dashboard.search({
      tabId: 1
    }, function(data) {
      $scope.$broadcast('hideAjax');
      $scope.groupBtnTab1 = data;
    });
    var tab2 = Dashboard.search({
      tabId: 2
    }, function(data) {
      $scope.$broadcast('hideAjax');
      $scope.groupBtnTab2 = data;
    });
  };

  // first load information
  $scope.loadAvatars();
  $scope.loadGraph();
  $scope.loadOptions();

};

angular.module('inspinia').controller('DashboardCtrl', [
  '$scope', '$interval', 'Avatar', 'Graph', 'Dashboard', DashboardCtrl
]);
