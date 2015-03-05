function Login(email, password) {
  this.email = email;
  this.password = password;
}

function LoginCtrl($scope) {
    $scope.Login = new Login();
    $scope.msg = undefined;

    $scope.submit = function() {
      // On submit user and password
      $scope.msg = 'Ungültige Benutzer';
    };
};

angular.module('inspinia').controller('LoginCtrl', ['$scope', LoginCtrl])
