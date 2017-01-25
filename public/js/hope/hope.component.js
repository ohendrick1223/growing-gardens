'use strict';
(function() {
  angular.module('app')
    .component('hope', {
      templateUrl: '/js/hope/hope.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
