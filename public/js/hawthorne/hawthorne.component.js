'use strict';
(function() {
  angular.module('app')
    .component('hawthorne', {
      templateUrl: '/js/hawthorne/hawthorne.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams', '$http', 'gardenService', 'plotModal', 'ModalService'];
    function controller($state, $stateParams, $http, gardenService, plotModal, ModalService) {
      const vm = this;
      vm.$onInit = function() {
        // Build produce object and color it
        gardenService.getPlots($http, 'hawthorn_garden');
      };

      vm.selectPlot = function(plot_id) {
        plotModal.getModal($http, ModalService, plot_id);
      };
    }
}());
