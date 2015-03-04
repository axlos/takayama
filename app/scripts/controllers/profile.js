function User(id, name, age, email, avatar) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.email = email;
  this.avatar = avatar;
}

function ProfileCtrl($scope) {
  // example avatar users
  var users = [];
  users.push(new User(1, 'Alexander Ospina', 31, 'info@alexanderospina.com', 'images/a1.jpg'));
  users.push(new User(2, 'Alex Takayama', 28, 'alextakayama@odesk.com', 'images/a2.jpg'));
  users.push(new User(3, 'Willsom morrison', 35, 'wilsom@odesk.com', 'images/a3.jpg'));
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
