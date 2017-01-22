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
      console.log("on init");
    };

    // vm.user.email = "";
    // vm.user.password = "";
    vm.submitForm = function() {
      console.log("submitting form data");
      // http  post request to api/authentic
      // body params, email and password
      $http.post('/api/authenticate', { email: vm.user.email, password: vm.user.password })
        .then(function(result) {
          console.log("successfully logged in ", result);
          //TODO reroute to home logged in
        });
    };
  }
}());
