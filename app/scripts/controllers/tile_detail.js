function Message(author, date, content) {
  this.author = author;
  this.date = date;
  this.content = content;
}

function TileDetailCtrl($scope, FileUploader) {
  $scope.uploader = new FileUploader();
  $scope.messages = [];
  $scope.newMsg = "";

  $scope.addMsg = function() {
    $scope.messages.push(new Message('Alex', new Date(), $scope.newMsg));
  };

  $scope.cards = [
    'views/cards/allianz.html',
    'views/cards/custom.html'
  ];

};

angular.module('inspinia').controller('TileDetailCtrl', [
  '$scope', 'FileUploader', TileDetailCtrl
]);
