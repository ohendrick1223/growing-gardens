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
        // Send the object to d3, let it do it's thing.
        let rawData = JSON.parse(result.response);
        vm.objLength = Object.keys(rawData).length;
        display(rawData);

        // Manipulate the data, convert to array, to sort the object given.
        let arr = [];
        for (let prop in rawData) {
          arr.push(rawData[prop]);
        }
        arr.sort(function (x, y) {
          let val = 'total_amount';
          return x[val] > y[val] ? -1 : x[val] < y[val] ? 1 : 0;
        });
        console.log(arr);
        vm.produces = arr;

        // Refresh the Digest cycle, force the page to populate information.
        $scope.$apply();
      });
    };
  }
}());
