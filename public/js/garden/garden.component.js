'use strict';
(function() {
  angular.module("app")
    .component("garden", {
      templateUrl: "js/garden/garden.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams", 'ModalService'];

  function controller($http, $state, $stateParams, ModalService) {
    const vm = this;
    var plots = [];

    vm.$onInit = function() {
      $http.get('/api/plots').then(function(result) {
        console.log(result);
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].farm === $stateParams.gardenName) {
            plots.push(result.data[i]);
          }
        }
        console.log("All plots :", plots);
        //Set the map
        vm.map = $stateParams.gardenName;
        console.log(vm.map);
        // console.log("map name: ", vm.map+".svg");
      });
    };

    vm.selectPlot = function(plotId) {
      ModalService.showModal({
        templateUrl: "js/garden/modal_plot.html",
        controller: function ($scope, $element, close) {
          $http.get('/api/plots/'+plotId).then(function(result) {
            $scope.singlePlot = result.data;
            // console.log("plot data", result.data);
            $http.get('/api/producePlots/'+plotId).then(function(pData) {
              // $scope.myCol = [];
              $scope.singlePlot.produce = [];
              for (var i = 0; i < pData.data.produce.length; i++) {
                // populate an array of key value pairs from the array of produce
                $scope.singlePlot.produce.push({
                  name: pData.data.produce[i],
                  image: '../../assets/icons/carrot_icon.svg'
                });
                // $scope.myCol.push({
                //   // TODO pull image url from DB
                //   thumnailUrl: '../../assets/icons/carrot_icon.svg',
                //   title: produce.data.produce[i]
                // });
              }
              console.log($scope.singlePlot.produce);
            });
          });

          $scope.myClose = function(result){
            $element.modal('hide');
            close(null, 500);
          };
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          console.log("CLOSING MODAL AMIRITE?: ", result);
        });
      });
    };
  }
}());
