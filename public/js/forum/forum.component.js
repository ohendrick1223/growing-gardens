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
    vm.needPosts = [];
    vm.havePosts = [];

    vm.$onInit = function() {
      getPosts();
    };

    vm.changeCategory = function(category) {
      $stateParams.category = category;
      getPosts();
    };

    function getPosts() {
      let displayedPosts = [];
      $http.get('/posts/').then(function(result){
        vm.category = $stateParams.category;
        displayedPosts = [];
        // Only display posts if the current category matches
        for (var i = 0; i < result.data.length; i++) {
          if (vm.category === "all") {
            displayedPosts.push(result.data[i]);
          } else if (result.data[i].category === vm.category) {
            displayedPosts.push(result.data[i]);
          }
        }
        // Organize data by want/need
        populateColumns(displayedPosts);
      });
    }

    function populateColumns(posts) {
      vm.needPosts = [];
      vm.havePosts = [];
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].want) {
          vm.needPosts.push(posts[i]);
        } else {
          vm.havePosts.push(posts[i]);
        }
      }
    }
  }

}());
