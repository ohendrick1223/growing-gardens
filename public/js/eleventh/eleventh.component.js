'use strict';
(function() {
  angular.module('app')
    .component('eleventh', {
      templateUrl: '/js/eleventh/eleventh.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
