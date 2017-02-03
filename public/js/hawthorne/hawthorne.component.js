'use strict';
(function() {
  angular.module('app')
    .component('hawthorne', {
      templateUrl: '/js/hawthorne/hawthorne.template.html',
      controller: controller
    });

    controller.$inject = ['$scope', '$state', '$stateParams', '$http', 'gardenService', 'plotModal', 'ModalService'];
    function controller($scope, $state, $stateParams, $http, gardenService, plotModal, ModalService) {
      const vm = this;
      vm.plotData = gardenService.plots;
      vm.dataLoaded = false;

      vm.$onInit = function() {
        // Build produce object and color it
        gardenService.getPlots($http, 'hawthorn_garden');
        checkDataStatus();
      };

      function checkDataStatus() {
        if (vm.plotData[0]) {
          if (vm.plotData[0].produce) {
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
        plotModal.getModal($http, ModalService, plot_id);
      };
    }
}());
