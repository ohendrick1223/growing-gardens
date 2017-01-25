'use strict';
(function() {
  angular.module('app')
    .component('hawthorne', {
      templateUrl: '/js/hawthorne/hawthorne.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.$onInit = function() {
      };
    }
}());
