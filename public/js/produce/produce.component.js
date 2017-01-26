'use strict';
(function () {
  angular.module("app")
    .component("produce", {
      templateUrl: "js/produce/produce.template.html",
      controller: controller
    })

  controller.$inject = ["$scope", "$http", "$state", "$stateParams"];

  function controller($scope, $http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function () {
      // setup the buttons.
      setupButtons();

      d3.request('/api/allPlots', result => {
        let rawData = JSON.parse(result.response);
        vm.produces = rawData;
        vm.objLength = Object.keys(rawData).length;
        display(rawData);
        $scope.$apply();
      });
    };
  }
}());
