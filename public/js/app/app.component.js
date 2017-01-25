'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;
      vm.isNavCollapsed = true;
      vm.$onInit = function() {

      };
    }
}());

// GLOBAL FOR ACCESSING USER DATA
// console.log("USER NAME", $.cookie('user_info'));
