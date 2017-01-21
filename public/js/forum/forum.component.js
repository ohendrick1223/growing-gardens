'use strict';
(function() {
  angular.module("app")
    .component("forum", {
      templateUrl: "js/forum/forum.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams", 'forumData'];

  function controller($http, $state, $stateParams, forumData) {
    const vm = this;
    vm.$onInit = function() {
      $http.get('/posts/').then(function(result){
        console.log(result.data);
      });
    };
  }
}());
