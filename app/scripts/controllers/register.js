function RegisterCtrl($scope) {
    $scope.terms = false;
    $scope.news = true;
};

angular.module('inspinia').controller('RegisterCtrl', ['$scope', RegisterCtrl])
