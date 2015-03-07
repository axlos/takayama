'use strict';

function ButtonObj(type, icon, label, url) {
  this.type = type;
  this.icon = icon;
  this.label = label;
  this.url = url;
}

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
  // TODO: This shoud be the real called to an API
  // return $resource(DashboardEndPoint, params, actions);

  // this is a example

  // create example buttons tab 1
  var groupBtn1 = [];
  groupBtn1.push(new ButtonObj('primary', 'fa-user-secret', 'Private Haftpflicht', 'index.main'));
  groupBtn1.push(new ButtonObj('default', 'fa-bus', 'KFZ Haftpflicht', 'index.main'));
  groupBtn1.push(new ButtonObj('primary', 'fa-paw', 'Tierhalterhaftpflicht', 'index.main'));
  groupBtn1.push(new ButtonObj('default', 'fa-shield', 'Sonstige Haftpflicht', 'index.main'));
  groupBtn1.push(new ButtonObj('primary', 'fa-home', 'Wohngebäude', 'index.main'));
  groupBtn1.push(new ButtonObj('default', 'fa-beer', 'Hausrat', 'index.main'));
  groupBtn1.push(new ButtonObj('default', 'fa-ambulance', 'Krankheit (Grundschutz)', 'index.main'));
  groupBtn1.push(new ButtonObj('default', 'fa-wheelchair', 'Berufsunfähigkeit', 'index.main'));
  groupBtn1.push(new ButtonObj('primary', 'fa-taxi', 'Rechtsschutz (Verkehr)', 'index.main'));
  groupBtn1.push(new ButtonObj('primary', 'fa-gavel', 'Rechtsschutz (Sonstige)', 'index.main'));
  groupBtn1.push(new ButtonObj('success', 'fa-plus', '', 'index.main'));
  groupBtn1.push(new ButtonObj('success', 'fa-history', '', 'index.h48'));

  // create example buttons tab 2
  var groupBtn2 = [];
  groupBtn2.push(new ButtonObj('danger', 'fa-user-secret', 'Private Haftpflicht', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-bus', 'KFZ Haftpflicht', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-paw', 'Tierhalterhaftpflicht', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-shield', 'Sonstige Haftpflicht', 'index.main'));
  groupBtn2.push(new ButtonObj('default', 'fa-home', 'Wohngebäude', 'index.main'));
  groupBtn2.push(new ButtonObj('primary', 'fa-beer', 'Hausrat', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-ambulance', 'Krankheit (Grundschutz)', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-wheelchair', 'Berufsunfähigkeit', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-taxi', 'Rechtsschutz (Verkehr)', 'index.main'));
  groupBtn2.push(new ButtonObj('danger', 'fa-gavel', 'Rechtsschutz (Sonstige)', 'index.main'));
  groupBtn2.push(new ButtonObj('success', 'fa-plus', '', 'index.main'));
  groupBtn2.push(new ButtonObj('success', 'fa-history', '', 'index.h48'));

  return {
    get: function(index) {
      if(index === 0) {
        return groupBtn1;
      } else {
        return groupBtn2;
      }
    }
  };
}

angular.module('inspinia').factory('Dashboard', [
  '$resource', 'DashboardEndPoint', 'Config', Dashboard
])
.value('DashboardEndPoint', 'http://:server/dashboard/:id');
