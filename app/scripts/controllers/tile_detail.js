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

  var options = {
    container: $('#img-carousel'),
    carousel: true
  };

  var slides = $scope.slides = [{
    image: 'images/private1.png'
  }, {
    image: 'images/private2.png'
  }];

};

angular.module('inspinia').controller('TileDetailCtrl', [
  '$scope', 'FileUploader', TileDetailCtrl
]);
