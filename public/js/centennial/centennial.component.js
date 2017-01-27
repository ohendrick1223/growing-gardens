'use strict';
(function() {
  angular.module("app")
    .component("centennial", {
      templateUrl: 'js/centennial/centennial.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams', '$http', 'gardenService', 'plotModal', 'ModalService'];
    function controller($state, $stateParams, $http, gardenService, plotModal, ModalService) {
      const vm = this;

      vm.$onInit = function() {
        // Build produce object and color it
        gardenService.getPlots($http, 'centennial_garden');
      };

      // Modal functionality
      vm.selectPlot = function(plot_id) {
        plotModal.getModal($http, ModalService, plot_id, gardenService);
      };
    }
}());
