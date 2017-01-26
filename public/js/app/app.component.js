'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams', '$http', 'userService'];
    function controller($state, $stateParams, $http, userService) {
      const vm = this;
      vm.isNavCollapsed = true;

      vm.$onInit = function() {
        userService.checkLogInStatus();
        vm.isLoggedIn = userService.checkLogInStatus();
        console.log("!!!!", userService.checkLogInStatus());
      };

      vm.logOut = function() {
        console.log("client logging out");
        userService.isLoggedIn = false;
        vm.isLoggedIn = userService.isLoggedIn;
        $http.delete('/api/authenticate').then(function(result) {
          vm.isLoggedIn = userService.checkLogInStatus();
          $state.go('home');
        });
      };

    }
}());

// var UID = parseInt($.cookie('user_info'));
// GLOBAL FOR ACCESSING USER DATA
// console.log("USER NAME", $.cookie('user_info'));
