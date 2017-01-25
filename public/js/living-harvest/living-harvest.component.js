'use strict';
(function() {
  angular.module('app')
    .component('livingHarvest', {
      templateUrl: '/js/living-harvest/living-harvest.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
