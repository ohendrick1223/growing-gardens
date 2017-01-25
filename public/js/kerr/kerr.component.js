'use strict';
(function() {
  angular.module('app')
    .component('kerr', {
      templateUrl: '/js/kerr/kerr.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
