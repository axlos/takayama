function DashboardCtrl($scope) {
  $scope.barOptions = {
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
  $scope.barData = [{
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
};

angular.module('inspinia').controller('DashboardCtrl', ['$scope', DashboardCtrl]);
