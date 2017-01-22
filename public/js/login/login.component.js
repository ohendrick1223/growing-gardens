'use strict';
(function() {
  angular.module("app")
    .component("login", {
      templateUrl: "js/login/login.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
      //TODO, check if the user is already logged in, if so, reroute to home state
    };

    // vm.user.email = "";
    // vm.user.password = "";
    vm.submitLogin = function() {
      $http.post('/api/authenticate', { email: vm.user.email, password: vm.user.password })
        .then(function(result) {
          console.log("success", result);
          $state.go("home");
        });
    };
  }
}());
