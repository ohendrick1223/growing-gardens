'use strict';
(function() {
  angular.module("app")
    .component("garden", {
      templateUrl: "js/garden/garden.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;
    var plots = [];

    vm.$onInit = function() {
      $http.get('/api/plots').then(function(result) {
        console.log(result);
        for (var i = 0; i < result.data.length; i++) {
          if (result.data[i].farm === $stateParams.gardenName) {
            plots.push(result.data[i]);
          }
        }
        console.log(plots);
        //Set the map
        vm.map = $stateParams.gardenName;
        console.log(vm.map);
        // console.log("map name: ", vm.map+".svg");
      });
    };
  }
}());
