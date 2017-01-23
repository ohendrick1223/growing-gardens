'use strict';
(function() {
  angular.module('app')
    .component('app', {
      templateUrl: '/js/app/app.template.html',
      controller: controller
    });

    controller.$inject = ['$state', '$stateParams'];
    function controller($state, $stateParams) {
      const vm = this;

      vm.$onInit = function() {

      };
    }
}());

// GLOBAL FOR ACCESSING USER DATA
console.log("user info", getCookie('user_info'));
console.log(document.cookie);

function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}
