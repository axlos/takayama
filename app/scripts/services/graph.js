'use strict';

function GraphObj() {
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
  this.data = [{
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
}

function Graph($resource, GraphEndPoint, Config) {
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
  // TODO: this should be the real call to an API service
  // return $resource(GraphEndPoint, params, actions);

  // this is a example
  var graph = new GraphObj();

  return {
    get: function() {
      return graph;
    }
  };
}

angular.module('inspinia')
.factory('Graph', ['$resource', 'GraphEndPoint', 'Config', Graph])
.value('GraphEndPoint', 'http://:server/graph/:id');
