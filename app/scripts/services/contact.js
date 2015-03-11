'use strict';

function Contact($resource, ContactEndPoint, Config) {
  var params = {
    server: Config.server
  };
  var actions = {};
  return $resource(ContactEndPoint, params, actions);
}

angular.module('inspinia').factory('Contact', [
  '$resource', 'ContactEndPoint', 'Config', Contact
])
.value('ContactEndPoint', 'http://:server/message/:id');
