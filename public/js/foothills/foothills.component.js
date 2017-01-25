'use strict';
(function() {
  angular.module('app')
    .component('foothills', {
      templateUrl: '/js/foothills/foothills.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
