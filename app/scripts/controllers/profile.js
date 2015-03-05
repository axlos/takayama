function User(id, sex, age, relationship, avatar, status) {
  this.id = id;
  this.sex = sex;
  this.age = age;
  this.relationship = relationship;
  this.avatar = avatar;
  this.status = status;
}

function ProfileCtrl($scope) {
  // example avatar users
  var users = [];
  users.push(new User(1, 'male', '31', 'ich', 'images/a1b.png', 'leding'));
  users.push(new User(2, 'female', '26', 'ich', 'images/a2b.png', 'leding'));
  users.push(new User(3, 'female', '47', 'ich', 'images/a3b.png', 'leding'));
  $scope.users = users;

  // current avatar index
  var index = 0;
  $scope.current = users[index];
  // events on avatar change
  $scope.prev = function() {
    index = index > 0 ? index-1 : 0;
    $scope.current = users[index];
    console.log(index);
  }
  $scope.next = function() {
    index = index < users.length -1 ? index + 1 : index;
    $scope.current = users[index];
    console.log(index);
  }
};

angular.module('inspinia').controller('ProfileCtrl', ['$scope', ProfileCtrl]);
