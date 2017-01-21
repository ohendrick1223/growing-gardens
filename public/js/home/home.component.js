'use strict';
(function() {
  console.log("home script loaded");
  angular.module("app")
    .component("home", {
      templateUrl: "js/home/home.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this

    vm.$onInit = function() {
      console.log("home controller loaded");
    }
  }
}());
