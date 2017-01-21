'use strict';
(function() {
  angular.module("app")
    .component("about", {
      templateUrl: "js/about/about.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
    };
  }
}());
