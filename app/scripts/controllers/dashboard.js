function DashboardCtrl($scope, $interval, Avatar, Graph, Dashboard) {

  $scope.loadAvatars = function() {
    $scope.avatars = Avatar.get();
  };

  $scope.loadGraph = function() {
    $scope.graph = Graph.get();
  };

  $scope.loadBtns = function() {
    var tab1 = Dashboard.get(0);
    var tab2 = Dashboard.get(1);

    $scope.groupBtnTab1 = tab1;
    $scope.groupBtnTab2 = tab2;
  };

  // first load information
  $scope.loadAvatars();
  $scope.loadGraph();
  $scope.loadBtns();

  // example how to shoe an ajax on load
  window.setTimeout(function() {
    $("#ajax").hide();
    $("#dashboard").show();
  }, 1000);

};

angular.module('inspinia').controller('DashboardCtrl', [
  '$scope', '$interval', 'Avatar', 'Graph', 'Dashboard', DashboardCtrl
]);
