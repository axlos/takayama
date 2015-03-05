'use strict';

angular.module('inspinia')
.factory('Avatar', ['$resource', 'AvatarEndPoint', 'Config',
  function($resource, ActivityEndPoint, Config) {
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
    return $resource(ActivityEndPoint, params, actions);
  }
])
.value('AvatarEndPoint', 'http://:server/avatar/:id');
