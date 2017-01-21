'use strict';

(function() {
  console.log("Getting to app.component");
  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {

      const vm = this;

      vm.$onInit = function() {
        console.log("app controller loaded");
      };
    }

}());
