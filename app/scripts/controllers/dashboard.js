function Button(type, icon, label, url) {
  this.type = type;
  this.icon = icon;
  this.label = label;
  this.url = url;
}

function Avatar(img) {
  this.img = img;
}

function Grahp(data) {
  this.options = {
    series: {
      bars: {
        show: true,
        barWidth: 0.6,
        fill: 1.0
      }
    },
    xaxis: {
      ticks:[
        [0, 'JAN'],
        [1, 'FEB'],
        [2, 'MAR'],
        [3, 'APR'],
        [4, 'MAI'],
        [5, 'JUN'],
        [6, 'JUL'],
        [7, 'AUG'],
        [8, 'SEP'],
        [9, 'OKT'],
        [10, 'NOV'],
        [11, 'DEZ']
      ],
      color: 'white',
      font: 'sans-serif',
      position: 'bottom'
    },
    yaxis: {
      color: 'white',
      font: 'sans-serif',
      tickFormatter: function(val, axis) {
         return parseFloat(val, 10).toFixed(0).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").concat(' &euro;').toString();
      },
      tickDecimals: 1
    },
    colors: ["#FF786A"],
    grid: {
      hoverable: true,
      clickable: true,
      tickColor: "#A9A9A9"
    },
    legend: {
      show: false
    },
    tooltip: false,
    tooltipOpts: {
      content: "x: %x, y: %y"
    }
  };
  this.data = data;
}

function DashboardCtrl($scope, $interval, Avatar) {
  // create example avatars
  var avatars = [];

  $scope.loadAvatars = function() {
    avatars.push('images/a1b.png');
    avatars.push('images/a2b.png');
    avatars.push('images/a3b.png');
    $scope.avatars = avatars;
  };

  // example bar graphic
  var graph = new Grahp();
  var data = [];
  $scope.loadGraph = function() {
    data = [{
      label: "bar",
      data: [
        [0, 60000],
        [1, 5000],
        [2, 5000],
        [3, 60000],
        [4, 5000],
        [5, 5000],
        [6, 60000],
        [7, 5000],
        [8, 5000],
        [9, 60000],
        [10, 5000],
        [11, 5000]
      ]
    }];
    graph.data = data;
    $scope.graph = graph;
  };

  // create example buttons tab 1
  var groupBtn1 = [];
  // create example buttons tab 2
  var groupBtn2 = [];
  $scope.loadBtns = function() {
    groupBtn1.push(new Button('primary', 'fa-user-secret', 'Private Haftpflicht', 'index.main'));
    groupBtn1.push(new Button('default', 'fa-bus', 'KFZ Haftpflicht', 'index.main'));
    groupBtn1.push(new Button('primary', 'fa-paw', 'Tierhalterhaftpflicht', 'index.main'));
    groupBtn1.push(new Button('default', 'fa-shield', 'Sonstige Haftpflicht', 'index.main'));
    groupBtn1.push(new Button('primary', 'fa-home', 'Wohngebäude', 'index.main'));
    groupBtn1.push(new Button('default', 'fa-beer', 'Hausrat', 'index.main'));
    groupBtn1.push(new Button('default', 'fa-ambulance', 'Krankheit (Grundschutz)', 'index.main'));
    groupBtn1.push(new Button('default', 'fa-wheelchair', 'Berufsunfähigkeit', 'index.main'));
    groupBtn1.push(new Button('primary', 'fa-taxi', 'Rechtsschutz (Verkehr)', 'index.main'));
    groupBtn1.push(new Button('primary', 'fa-gavel', 'Rechtsschutz (Sonstige)', 'index.main'));
    groupBtn1.push(new Button('success', 'fa-plus', '', 'index.main'));
    groupBtn1.push(new Button('success', 'fa-history', '', 'index.h48'));
    $scope.groupBtnTab1 = groupBtn1;

    groupBtn2.push(new Button('danger', 'fa-user-secret', 'Private Haftpflicht', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-bus', 'KFZ Haftpflicht', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-paw', 'Tierhalterhaftpflicht', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-shield', 'Sonstige Haftpflicht', 'index.main'));
    groupBtn2.push(new Button('default', 'fa-home', 'Wohngebäude', 'index.main'));
    groupBtn2.push(new Button('primary', 'fa-beer', 'Hausrat', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-ambulance', 'Krankheit (Grundschutz)', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-wheelchair', 'Berufsunfähigkeit', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-taxi', 'Rechtsschutz (Verkehr)', 'index.main'));
    groupBtn2.push(new Button('danger', 'fa-gavel', 'Rechtsschutz (Sonstige)', 'index.main'));
    groupBtn2.push(new Button('success', 'fa-plus', '', 'index.main'));
    groupBtn2.push(new Button('success', 'fa-history', '', 'index.h48'));
    $scope.groupBtnTab2 = groupBtn2;
  };

  // load information
  $scope.loadAvatars();
  $scope.loadGraph();
  $scope.loadBtns();
  // mock an ajax on load
  window.setTimeout(function() {
    $("#ajax").hide();
    $("#dashboard").show();
  }, 1000);

};

angular.module('inspinia').controller('DashboardCtrl', ['$scope', '$interval', 'Avatar', DashboardCtrl]);
