'use strict';
(function () {
  angular.module("app")
    .component("produce", {
      templateUrl: "js/produce/produce.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function () {
      // setup the buttons.
      setupButtons();

      d3.request('/api/allPlots', result => {
        let rawData = JSON.parse(result.response);
        console.log(rawData);
        vm.produces = rawData;
        display(rawData);
      });
    };
  }
}());
