'use strict';

(function() {
  console.log("Getting to app.component");
  angular.module('app')
    .component('app', {
      templateUrl: 'js/app/app.template.html',
      controller: controller
    });

    function controller() {
      const vm = this;

      vm.$onInit = function() {
        console.log("App component loaded!");
      };
    }




})();
