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
  // TODO: This shoud be the real called to an API
  // return $resource(AvatarEndPoint, params, actions);

  // this is a example
  var avatars = [];
  avatars.push('images/a1b.png');
  avatars.push('images/a2b.png');
  avatars.push('images/a3b.png');

  return {
    get: function() {
      return avatars;
    }
  };
}

angular.module('inspinia').factory('Avatar', [
  '$resource', 'AvatarEndPoint', 'Config', Avatar
])
.value('AvatarEndPoint', 'http://:server/avatar/:id');
