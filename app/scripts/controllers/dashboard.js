function Button(type, icon, label) {
  this.type = type;
  this.icon = icon;
  this.label = label;
}

function Avatar(img) {
  this.img = img;
}

function Grahp(data) {
  this.options = {
    series: {
      bars: {
        show: true,
        barWidth: 0.7,
        fill: true,
        fillColor: {
            colors: [{
                opacity: 0.8
            }, {
                opacity: 0.8
            }]
        }
      }
    },
    xaxis: {
      tickDecimals: 0,
      autoscaleMargin: 0.1
    },
    colors: ["#FF786A"],
    grid: {
      color: "#D7D9D9",
      hoverable: true,
      clickable: true,
      tickColor: "#D7D9D9",
      borderWidth:0
    },
    legend: {
      show: false,
    },
    tooltip: true,
    tooltipOpts: {
      content: "x: %x, y: %y"
    }
  };
  this.data = data;
}

function DashboardCtrl($scope) {
  // example bar graphic
  var graph = new Grahp();
  var data = [{
    label: "bar",
    data: [
      [1, 34],
      [2, 25],
      [3, 19],
      [4, 34],
      [5, 34],
      [6, 32],
      [7, 12],
      [8, 24],
      [9, 35],
      [10, 54],
      [11, 34],
      [12, 53],
      [13, 24]
    ]
  }];
  graph.data = data;
  $scope.graph = graph;

  // create example buttons tab 1
  var groupBtn1 = [];
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
  groupBtn1.push(new Button('gray', 'fa-history'));
  $scope.groupBtnTab1 = groupBtn1;

  // create example buttons tab 2
  var groupBtn2 = [];
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
  groupBtn2.push(new Button('gray', 'fa-history'));
  $scope.groupBtnTab2 = groupBtn2;

  // create example avatars
  var avatars = [];
  avatars.push('images/a1b.png');
  avatars.push('images/a2b.png');
  avatars.push('images/a3b.png');
  $scope.avatars = avatars;
};

angular.module('inspinia').controller('DashboardCtrl', ['$scope', DashboardCtrl]);
