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
  groupBtn1.push(new Button('primary', 'fa-glass', 'Text 1'));
  groupBtn1.push(new Button('default', 'fa-car', 'Text 2'));
  groupBtn1.push(new Button('primary', 'fa-paw', 'Text 3'));
  groupBtn1.push(new Button('default', 'fa-shield', 'Text 4'));
  groupBtn1.push(new Button('primary', 'fa-home', 'Text 5'));
  groupBtn1.push(new Button('default', 'fa-beer', 'Text 6'));
  groupBtn1.push(new Button('default', 'fa-briefcase', 'Text 7'));
  groupBtn1.push(new Button('default', 'fa-bicycle', 'Text 8'));
  groupBtn1.push(new Button('primary', 'fa-bomb', 'Text 9'));
  groupBtn1.push(new Button('primary', 'fa-bell', 'Text 10'));
  groupBtn1.push(new Button('success', 'fa-plus'));
  groupBtn1.push(new Button('success', 'fa-history'));
  $scope.groupBtnTab1 = groupBtn1;

  // create example buttons tab 2
  var groupBtn2 = [];
  groupBtn2.push(new Button('danger', 'fa-anchor', 'Text 1'));
  groupBtn2.push(new Button('danger', 'fa-archive', 'Text 2'));
  groupBtn2.push(new Button('danger', 'fa-cab', 'Text 3'));
  groupBtn2.push(new Button('danger', 'fa-coffee', 'Text 4'));
  groupBtn2.push(new Button('default', 'fa-diamond', 'Text 12'));
  groupBtn2.push(new Button('primary', 'fa-globe', 'Text 5'));
  groupBtn2.push(new Button('danger', 'fa-lock', 'Text 6'));
  groupBtn2.push(new Button('default', 'fa-microphone', 'Text 7'));
  groupBtn2.push(new Button('danger', 'fa-pie-chart', 'Text 8'));
  groupBtn2.push(new Button('danger', 'fa-recycle', 'Text 9'));
  groupBtn2.push(new Button('success', 'fa-plus'));
  groupBtn2.push(new Button('success', 'fa-history'));
  $scope.groupBtnTab2 = groupBtn2;

  // create example avatars
  var avatars = [];
  avatars.push('images/a1b.png');
  avatars.push('images/a2b.png');
  avatars.push('images/a3b.png');
  $scope.avatars = avatars;
};

angular.module('inspinia').controller('DashboardCtrl', ['$scope', DashboardCtrl]);
