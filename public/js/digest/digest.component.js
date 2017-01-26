"use strict";
(function () {
  angular.module("app")
  .component("digest", {
    templateUrl: "js/digest/digest.template.html",
    controller: controller
  });

  controller.$inject = ["$scope", "$http", "$state", "$stateParams", 'ModalService'];

  function controller ($scope, $http, $state, $stateParams, ModalService) {
    const vm = this;

    vm.displayedDigests = [];
    vm.submitDigest = submitDigest;
    vm.getDigests = getDigests;

    vm.$onInit = function () {
      vm.getDigests();

      socket.on("new message", function (message){
        vm.displayedDigests.push( message);
        $scope.$apply();
      });
    }
    // ADD NEW DIGEST
    function submitDigest(e) {
      e.preventDefault();
      $http.post("api/digests", vm.newDigest).then(function (result) {
        delete vm.newDigest;
      });
    }

    // UPDATE DIGEST DISPLAY DYNAMICALLY
    function getDigests() {
      $http.get("api/digests").then(function (result) {
        for (let d = 0; d < result.data.length; d++) {
          vm.displayedDigests.push(result.data[d]);
        }
      });
    }
  }
}());
