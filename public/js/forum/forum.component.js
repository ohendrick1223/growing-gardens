'use strict';
(function() {
  console.log("forum script loaded");
  angular.module("app")
    .component("forum", {
      templateUrl: "js/home/forum.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
        console.log("forum controller loaded");
    }
  }
}());
