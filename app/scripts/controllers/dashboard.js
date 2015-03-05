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
      mode: "categories",
      tickDecimals: 1,
      tickLength: 20
    },
    colors: ["#FF786A"],
    grid: {
      hoverable: true,
      clickable: true,
      tickColor: "#3E4546"
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
    groupBtn1.push(new Button('primary', 'fa-user-secret', 'Private Haftpflicht'));
    groupBtn1.push(new Button('default', 'fa-bus', 'KFZ Haftpflicht'));
    groupBtn1.push(new Button('primary', 'fa-paw', 'Tierhalterhaftpflicht'));
    groupBtn1.push(new Button('default', 'fa-shield', 'Sonstige Haftpflicht'));
    groupBtn1.push(new Button('primary', 'fa-home', 'Wohngebäude'));
    groupBtn1.push(new Button('default', 'fa-beer', 'Hausrat'));
    groupBtn1.push(new Button('default', 'fa-ambulance', 'Grundschutz'));
    groupBtn1.push(new Button('default', 'fa-wheelchair', 'Berufsunfähigkeit'));
    groupBtn1.push(new Button('primary', 'fa-taxi', 'Verkehr'));
    groupBtn1.push(new Button('primary', 'fa-gavel', 'Sonstige'));
    groupBtn1.push(new Button('gray', 'fa-plus'));
    groupBtn1.push(new Button('gray', 'fa-history', '', 'index.h48'));
    $scope.groupBtnTab1 = groupBtn1;

    groupBtn2.push(new Button('danger', 'fa-user-secret', 'Private Haftpflicht'));
    groupBtn2.push(new Button('danger', 'fa-bus', 'KFZ Haftpflicht'));
    groupBtn2.push(new Button('danger', 'fa-paw', 'Tierhalterhaftpflicht'));
    groupBtn2.push(new Button('danger', 'fa-shield', 'Sonstige Haftpflicht'));
    groupBtn2.push(new Button('default', 'fa-home', 'Wohngebäude'));
    groupBtn2.push(new Button('primary', 'fa-beer', 'Hausrat'));
    groupBtn2.push(new Button('danger', 'fa-ambulance', 'Grundschutz'));
    groupBtn2.push(new Button('danger', 'fa-wheelchair', 'Berufsunfähigkeit'));
    groupBtn2.push(new Button('danger', 'fa-taxi', 'Verkehr'));
    groupBtn2.push(new Button('danger', 'fa-gavel', 'Sonstige'));
    groupBtn2.push(new Button('gray', 'fa-plus'));
    groupBtn2.push(new Button('gray', 'fa-history', '', 'index.h48'));
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
