function RegistrationObj(email, password, terms, news) {
  this.email = email;
  this.password = password;
  this.terms = terms;
  this.news = news;
}

function RegisterCtrl($scope) {
    $scope.registration = new RegistrationObj();
    $scope.msg = undefined;
    $scope.repassword = undefined;

    $scope.submit = function() {
      // On submit user registration
      if($scope.registration.password !== $scope.repassword) {
        $scope.msg = 'Spaltete nicht zusammenfallen';
      }
    };
};

angular.module('inspinia').controller('RegisterCtrl', ['$scope', RegisterCtrl])
