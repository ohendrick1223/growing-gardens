'use strict';
(function() {
  angular.module("app")
    .component("registration", {
      templateUrl: "js/registration/registration.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.$onInit = function() {
    };

    vm.submitRegistration = function() {
      console.log(vm.user);
      if (vm.user.password === vm.user.verified_password) {
        //First is a post to the user's table, using the response.data you get from that, you'll use that to push through the authentication route (/post to authenticate with the information you get back), and then you should be logged in.
      } else {
        // TODO Generate error notification
        console.log("Passwords do not match.");
      }
    };
  }
}());
