'use strict';

function Avatar($resource, AvatarEndPoint, Config) {
  var params = {
    server: Config.server
  };
  var actions = {
    search: {
      method: 'GET',
      isArray: true,
      params: {
        q: '@q'
      }
    }
  };
  return $resource(AvatarEndPoint, params, actions);
}

angular.module('inspinia').factory('Avatar', [
  '$resource', 'AvatarEndPoint', 'Config', Avatar
])
.value('AvatarEndPoint', 'http://:server/avatar/:id');
