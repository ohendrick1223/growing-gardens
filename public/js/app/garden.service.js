(function() {
  'use strict';

  angular.module('app')
    .service('gardenService', function() {
      this.gardenID = "gardenID";
      this.plots = [];

      this.getPlots = function($http, thisGarden) {
        var that = this;
        that.plots.length = 0;

        // Get all plot data and filter by garden
        $http.get('/api/plots').then(function(result) {
          // var plots = [];
          for (let i = 0; i < result.data.length; i++) {
            if (result.data[i].farm === thisGarden) {
              that.plots.push(result.data[i]);
            }
          }

          // Get all SVG clusters for each plot and add cluster to object reference
          let itr = 0;
          for (let i = that.plots[0].id; i <= that.plots[that.plots.length-1].id; i++) {
            that.plots[itr].svgCluster = angular.element('#p'+i).children();
            itr++;
          }

          // Add an array of produce data to the plot and populate it
          var promiseArr = [];
          for (let i = 0; i < that.plots.length; i++) {
            // i needs to start at 209
            let plotId = that.plots[0].id + i;
            // console.log(plotId);
            let promise = $http.get(`api/producePlots/${plotId}`);
            promiseArr.push(promise);
          }

          Promise.all(promiseArr).then(function(results) {
            for (let i = 0; i < results.length; i++) {
              // If there is data returned, add the produce to the plots object
              if (results[i].data.produce.length > 0) {
                that.plots[i].produce = results[i].data.produce;
              } else {
                console.error("missing produce");
              }
            }
            // For each plot, color the plot according to the produce entered
            for (let i = 0; i < that.plots.length; i++) {
              // console.log(that.plots[i].svgCluster);
              colorCluster(that.plots[i].produce, that.plots[i].svgCluster);
            }
          });
        });
      };

      function colorCluster(produce, plotCluster) {
        plotCluster.each(function(i, el) {
          let colorVar = getRandomIntInclusive(0, produce.length-1);
          let color = '#'+produce[colorVar].color;
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
