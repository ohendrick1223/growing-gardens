'use strict';
(function() {
  angular.module('app')
    .component('kerr', {
      templateUrl: '/js/kerr/kerr.template.html',
      controller: controller
    });

    controller.$inject = ['$scope', '$state', '$stateParams', '$http', 'gardenService', 'plotModal', 'ModalService'];
    function controller($scope, $state, $stateParams, $http, gardenService, plotModal, ModalService) {
      const vm = this;
      var plotData = gardenService.plots;
      vm.dataLoaded = false;

      vm.$onInit = function() {
        // Build produce object and color it
        gardenService.getPlots($http, 'kerr_garden');
        checkDataStatus();
      };
      function checkDataStatus() {
        if (plotData[0]) {
          if (plotData[0].produce) {
            vm.dataLoaded = true;
            $scope.$apply();
            return;
          } else {
            setTimeout(checkDataStatus, 0);
          }
        } else {
          setTimeout(checkDataStatus, 0);
        }
      }

      vm.selectPlot = function(plot_id) {
        plotModal.getModal($http, ModalService, plot_id, gardenService);
      };
    }
}());
