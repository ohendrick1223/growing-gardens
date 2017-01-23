'use strict';
(function() {
  angular.module("app")
    .component("forum", {
      templateUrl: "js/forum/forum.template.html",
      controller: controller
    });

  controller.$inject = ["$http", "$state", "$stateParams", 'ModalService'];

  function controller($http, $state, $stateParams, ModalService) {
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
      $http.get('/posts').then(function(result) {
        vm.category = $stateParams.category;
        displayedPosts = [];
        //TODO refactor with a filter HOF
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

    vm.uploadPhoto = function() {
      console.log("button firing!!");
      cloudinary.openUploadWidget({
          cloud_name: 'ohendrick1223',
          upload_preset: 'zpfcnfn1'
        },
        function(error, result) {
          if (error) {
            console.error(error);
          }
          var photoURL = result[0].secure_url;
          // Display photo preview
          console.log(photoURL);
        });
    };

    vm.createPost = function() {
      ModalService.showModal({
        templateUrl: "js/forum/modal.html",
        controller: function($scope, $element, close) {
          $scope.myClose = function(result) {
            $element.modal('hide');
            close(null, 500);
          };
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function(result) {
          console.log("CLOSING MODAL AMIRITE?: ", result);
        });
      });
    };
  }
}());
