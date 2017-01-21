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
    vm.category = "";
    vm.displayedPosts = [];

    vm.$onInit = function() {
      getPosts();
    };

    vm.changeCategory = function(category) {
      $stateParams.category = category;
      getPosts();
    };

    function getPosts() {
      $http.get('/posts/').then(function(result){
        vm.category = $stateParams.category;
        vm.displayedPosts = [];
        // Only display posts if the current category matches
        for (var i = 0; i < result.data.length; i++) {
          if (vm.category === "all") {
            vm.displayedPosts.push(result.data[i]);
          } else if (result.data[i].category === vm.category) {
            vm.displayedPosts.push(result.data[i]);
          }
        }
        console.log(vm.displayedPosts);
      });
    }
  }

}());
