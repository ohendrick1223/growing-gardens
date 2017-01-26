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
          let itr = 0;
          // console.log(plots);
          // Get all SVG clusters for each plot and add cluster to object reference
          for (let i = plots[0].id; i <= plots[plots.length-1].id; i++) {
            // svgClusters start at 1 becuase of the naming in SVG files, hence i+1
            plots[itr].svgCluster = angular.element('#p'+i).children();

            // console.log(itr, plots[itr].svgCluster);
            itr++;
          }

          var promiseArr = [];
          // Add an array of produce data to the plot and populate it
          for (let i = 0; i < plots.length; i++) {
            // i needs to start at 209
            let plotId = plots[0].id + i;
            // console.log(plotId);
            let promise = $http.get(`api/producePlots/${plotId}`);
            promiseArr.push(promise);
          }

          Promise.all(promiseArr).then(function(results) {
            console.log(results);
            for (let i = 0; i < results.length; i++) {
              // if there is data returned, add the produce to the plots object
              if (results[i].data.produce.length > 0) {
                // let plotId = parseInt(results[i].data.plot_id);
                // console.log(plotId);
                plots[i].produce = results[i].data.produce;
              } else {
                console.error("missing produce");
              }
            }
            // For each plot, color the plot according to the produce entered
            for (let i = 0; i < plots.length; i++) {
              colorCluster(plots[i].produce, plots[i].svgCluster);
              console.log(plots[i]);
            }
            // console.log(plots);
          });
        });
      };

      function colorCluster(produce, plotCluster) {
        // if (produce[0]) {
          plotCluster.each(function(i, el) {
            // console.log(produce); // there should only be one value
            let colorVar = getRandomIntInclusive(0, produce.length-1);
            let color = '#'+produce[colorVar].color;
            angular.element(el).attr("style",'fill:' + color);
          });
        // }

      }
      // range is 0, 0 for now becuase there is only 1 entry in the produce arr
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
