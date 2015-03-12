function UploadCtrl($scope, FileUploader) {
  $scope.uploader = new FileUploader({});
};

angular.module('inspinia').controller('UploadCtrl', ['$scope', 'FileUploader', UploadCtrl]);
