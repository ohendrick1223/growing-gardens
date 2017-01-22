'use strict';
(function() {
  angular.module("app")
    .component("login", {
      templateUrl: "js/login/login.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {};
    vm.email = "";
    vm.password = "";
    vm.submitForm = function() {

    }
  }
}());
