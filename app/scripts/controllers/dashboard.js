function Button(type, icon) {
  this.type = type;
  this.icon = icon;
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
      tickDecimals: 0
    },
    colors: ["#1ab394"],
    grid: {
      color: "#999999",
      hoverable: true,
      clickable: true,
      tickColor: "#D4D4D4",
      borderWidth:0
    },
    legend: {
      show: false
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
  groupBtn1.push(new Button('primary', 'fa-glass'));
  groupBtn1.push(new Button('default', 'fa-car'));
  groupBtn1.push(new Button('primary', 'fa-paw'));
  groupBtn1.push(new Button('default', 'fa-shield'));
  groupBtn1.push(new Button('primary', 'fa-home'));
  groupBtn1.push(new Button('default', 'fa-beer'));
  groupBtn1.push(new Button('default', 'fa-briefcase'));
  groupBtn1.push(new Button('default', 'fa-bicycle'));
  groupBtn1.push(new Button('primary', 'fa-bomb'));
  groupBtn1.push(new Button('primary', 'fa-bell'));
  groupBtn1.push(new Button('success', 'fa-plus'));
  groupBtn1.push(new Button('success', 'fa-history'));
  $scope.groupBtnTab1 = groupBtn1;

  // create example buttons tab 2
  var groupBtn2 = [];
  groupBtn2.push(new Button('danger', 'fa-anchor'));
  groupBtn2.push(new Button('danger', 'fa-archive'));
  groupBtn2.push(new Button('danger', 'fa-cab'));
  groupBtn2.push(new Button('danger', 'fa-coffee'));
  groupBtn2.push(new Button('default', 'fa-diamond'));
  groupBtn2.push(new Button('primary', 'fa-globe'));
  groupBtn2.push(new Button('danger', 'fa-lock'));
  groupBtn2.push(new Button('default', 'fa-microphone'));
  groupBtn2.push(new Button('danger', 'fa-pie-chart'));
  groupBtn2.push(new Button('danger', 'fa-recycle'));
  groupBtn2.push(new Button('success', 'fa-plus'));
  groupBtn2.push(new Button('success', 'fa-history'));
  $scope.groupBtnTab2 = groupBtn2;

  // create example avatars
  var avatars = [];
  avatars.push('images/a1.jpg');
  avatars.push('images/a3.jpg');
  avatars.push('images/a4.jpg');
  avatars.push('images/a5.jpg');
  avatars.push('images/a6.jpg');
  avatars.push('images/a7.jpg');
  $scope.avatars = avatars;
};

angular.module('inspinia').controller('DashboardCtrl', ['$scope', DashboardCtrl]);
