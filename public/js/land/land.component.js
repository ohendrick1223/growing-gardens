'use strict';
(function() {
  angular.module("app")
    .component("land", {
      templateUrl: "js/land/land.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
      $http.get('/api/plots').then(function(result) {
        console.log(result.data);
      });
    };

    vm.selectPlot = function(plotName) {
      console.log(plotName);
      //Navigate to the garden that the user selected by changing state params
      $state.go('land', { garden: plotName });
    };
  }
}());
