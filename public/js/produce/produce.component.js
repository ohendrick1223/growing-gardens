'use strict';
(function() {
  angular.module("app")
    .component("produce", {
      templateUrl: "js/produce/produce.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
      $http.get('/produce').then(function(response) {
        console.log(response.data);
      });
    };
  }
}());
