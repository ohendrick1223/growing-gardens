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
      $http.get('api/posts').then(function(result) {
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
        console.log(displayedPosts);
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
      console.log("NEED ARRAY: ", vm.needPosts, "HAVE ARRAY: ", vm.havePosts);
    }



    vm.createPost = function() {
      ModalService.showModal({
        templateUrl: "js/forum/modal.html",
        controller: function($scope, $element, close) {

          $scope.wantIsTrue = function() {
            console.log("want button firing");
            $scope.newPost.want = true;
            console.log($scope.newPost.want);
          };
          $scope.wantIsFalse = function() {
            console.log("have button firing");
            $scope.newPost.want = false;
            console.log($scope.newPost.want);
          };

          $scope.uploadPhoto = function() {
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
                photoURL = $scope.newPost.posts_image_url;
                console.log($scope.newPost.posts_image_url);
                // TODO: CAN'T GET ACCESS TO photoURL IN ORDER TO BIND IT TO THE PAGE. LINE 88-ACCESS. LINE 90-NO ACCESS!!! THE SCOPE OF THIS CALLBACK FUNCTION PREVENTS ME FROM PULLING THE DATA INTO WHERE I WANT.
              });
          };

          $scope.myClose = function(result) {
            $element.modal('hide');
            close(null, 500);

            $http.post('/api/posts', $scope.newPost).then(function(results) {
              console.log("object to post: ", results.data);
            }); //get all updated data without refresh
            let displayedPosts = [];
            $http.get('api/posts').then(function(result) {
              console.log(result.data);
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
