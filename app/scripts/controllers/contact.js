function ContactCtrl($scope, Contact) {
  $scope.contactMsg = "";

  $scope.loadContactMsg = function() {
    $scope.contactMessages = Contact.query();
  };

  $scope.addContactMsg = function(msg) {
    var msg = new Contact({
      date: new Date().getTime(),
      content: msg
    });
    // save message
    msg.$save(function() {
      // reload message whe it saved
      $scope.loadContactMsg();
    });

    // reset control message
    $("#contactMsg").val('');

  };

  $scope.loadContactMsg();
};

angular.module('inspinia').controller('ContactCtrl', ['$scope', 'Contact', ContactCtrl]);
