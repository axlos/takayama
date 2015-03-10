'use strict';

function Dashboard($resource, DashboardEndPoint, Config) {
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
  return $resource(DashboardEndPoint, params, actions);
}

angular.module('inspinia').factory('Dashboard', [
  '$resource', 'DashboardEndPoint', 'Config', Dashboard
])
.value('DashboardEndPoint', 'http://:server/option/:id');
