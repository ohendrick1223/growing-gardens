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
        // If the password match, post a new user and autho authenticate
        $http.post('api/users', vm.user)
          .then(function(uResponse) {
            console.log("uResponse", uResponse);
            $http.post('/api/authenticate', uResponse)
              .then(function(aResponse) {
                console.log("aResponse", aResponse);
                //TODO check if response is successful. If not generate error notification
                $state.go("home");
              });
          });
      } else {
        // TODO Generate error notification
        console.log("Passwords do not match.");
      }
    };
  }
}());
