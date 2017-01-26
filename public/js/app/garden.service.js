(function() {
  'use strict';

  angular.module('app')
    .service('gardenService', function() {
      this.gardenID = "gardenID";
      this.gardenPlots = [];
      var that = this;
      //TODO call this on init in each garden
      this.getPlots = function($http, thisFarm) {
        $http.get('/api/plots').then(function(result) {
          var plots = [];
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].farm === thisFarm) {
              plots.push(result.data[i]);
            }
          }
          // Get all SVG clusters for each plot and add cluster to object reference
          for (let i = 0; i < plots.length; i++) {
            // svgClusters start at 1 becuase of the naming in SVG files, hence i+1
            plots[i].svgCluster = angular.element('#p'+(i+1)).children();
          }

          var promiseArr = [];
          // Add an array of produce data to the plot and populate it
          for (let i = 1; i <= plots.length; i++) {
            let promise = $http.get(`api/producePlots/${i}`);
            promiseArr.push(promise);
          }

          Promise.all(promiseArr).then(function(results) {
            for (let i = 0; i < results.length; i++) {
              // if there is data returned, add the produce to the plots object
              if (results[i].data) {
                let plotId = parseInt(results[i].data.plot_id) -1;
                plots[plotId].produce = results[i].data.produce;
              }
            }
            // For each plot, color the plot according to the produce entered
            for (let i = 0; i < plots.length; i++) {
              colorCluster(plots[i].produce, plots[i].svgCluster);
            }
          });
        });
      };

      function colorCluster(produce, plotCluster) {
        plotCluster.each(function(i, el) {
          let color = '#'+produce[getRandomIntInclusive(0, produce.length-1)].color;
          angular.element(el).attr("style",'fill:' + color);
        });
      }

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      this.updateSinglePlot = function($http, thisFarm, plot_id) {
        $http.get(`/api/plots/${plot_id}`).then(function(result) {
          var plot = result.data;
          plot.svgCluster = angular.element('#p'+(plot.id)).children();

          $http.get(`/api/producePlots/${plot_id}`).then(function(result) {
            // Do this after getting the produce
            plot.produce = result.data.produce;
            colorCluster(plot.produce, plot.svgCluster);
          });
        });
      };
    });
}());
