function ProfileCtrl($scope, Profile) {
  var users = Profile.get();
  $scope.users = users;

  // current avatar index
  var index = 0;
  $scope.current = users[index];
  // events on avatar change
  $scope.prev = function() {
    index = index > 0 ? index-1 : 0;
    $scope.current = users[index];
  }
  $scope.next = function() {
    index = index < users.length -1 ? index + 1 : index;
    $scope.current = users[index];
  }
};

angular.module('inspinia').controller('ProfileCtrl', ['$scope', 'Profile', ProfileCtrl]);
