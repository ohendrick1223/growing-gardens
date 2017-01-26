'use strict';
(function() {
  angular.module("app")
    .component("login", {
      templateUrl: "js/login/login.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams", "userService"];

  function controller($http, $state, $stateParams, userService) {
    const vm = this;

    vm.$onInit = function() {
      //TODO, check if the user is already logged in, if so, reroute to home state
      console.log(userService.checkLogInStatus());
      vm.isLoggedIn = userService.checkLogInStatus();
    };

    // vm.user.email = "";
    // vm.user.password = "";
    vm.submitLogin = function() {

      $http.post('/api/authenticate', { email: vm.user.email, password: vm.user.password })
        .then(function(result) {
          vm.isLoggedIn = userService.checkLogInStatus();
          $state.go('home').then(function() {
            $state.reload();
          });
        });
    };
  }

}());
