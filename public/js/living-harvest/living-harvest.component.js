'use strict';
(function() {
  angular.module('app')
    .component('livingHarvest', {
      templateUrl: '/js/living-harvest/living-harvest.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams', '$http', 'gardenService', 'ModalService'];
    function controller($state, $stateParams, $http, gardenService, ModalService) {
      const vm = this;
      vm.$onInit = function() {
        // Build produce object and color it
        gardenService.getPlots($http, 'centennial_garden');
      };

      vm.selectPlot = function(plot_id) {
        gardenService.getModal($http, ModalService, plot_id);
      };
    }
}());
