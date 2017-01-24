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
    vm.submitDigest = submitDigest;
    vm.getDigests = getDigests;

    vm.$onInit = function() {
      getPosts();
      getDigests();
    };
    vm.changeCategory = function(category) {
      $stateParams.category = category;
      getPosts();
    };
    // ADD NEW DIGEST
    function submitDigest() {
      $http.post("/api/digests", vm.newDigest).then(function (result) {
        displayedDigests.push(result.data);
        delete vm.newDigest;
      });
    }
    // UPDATE DIGEST DISPLAY DYNAMICALLY
    function getDigests () {
      vm.displayedDigests = [];
      $http.get("api/digests").then(function (result) {
        for (let d = 0; d < result.data.length; d++){
          displayedDigests.push(result.data[d]);
        }
      });

    }
// +++++GET ALL POSTS+++++
    function getPosts() {
      let displayedPosts = [];
      $http.get('api/posts').then(function(result) {
        vm.category = $stateParams.category;
        displayedPosts = [];
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
// +++++ORGANIZE ALL POSTS+++++
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
    // +++++NEW POST TO DATABASE & all form field data+++++
    vm.createPost = function() {
      ModalService.showModal({
        templateUrl: "js/forum/modal.html",
        controller: function($scope, $element, close) {
          $scope.newPost = {};
          // $scope.newPost.posts_image_url = "https://res.cloudinary.com/ohendrick1223/image/upload/v1485293702/bozhnnasowqi0pfactgz.jpg";

          // +++++SET WANT/HAVE BOOLEAN IN ORDER TO FILTER+++++
          $scope.wantIsTrue = function() {
          $scope.newPost.want = true;
          };
          $scope.wantIsFalse = function() {
          $scope.newPost.want = false;
          };
          // +++++UPLOAD PHOTO & CONVERT TO URL+++++
          $scope.uploadPhoto = function() {

            cloudinary.openUploadWidget({
                cloud_name: 'ohendrick1223',
                upload_preset: 'zpfcnfn1'
              },
              function(error, result) {
                if (error) {
                  console.error(error);
                }
                var photoURL = result[0].secure_url;
                console.log(photoURL);
                // Display photo preview
                $scope.newPost.posts_image_url = photoURL;
              });
            };
          // +++++CLOSE MODAL AND MAKE ACTUAL POST TO DATABASE+++++
          $scope.myClose = function() {
            $element.modal('hide');
            close(null, 500);
            $http.post('/api/posts', $scope.newPost).then(function(results) {
              console.log("object to post: ", results.data);
            });
            let displayedPosts = [];
            $http.get('api/posts').then(function(result) {
              vm.category = $stateParams.category;
              displayedPosts = [];
              for (var i = 0; i < result.data.length; i++) {
                if (vm.category === "all") {
                  displayedPosts.push(result.data[i]);
                } else if (result.data[i].category === vm.category) {
                  displayedPosts.push(result.data[i]);
                }
              } //CALL POPULATE COLUMNS FUNCTION AGAIN
              populateColumns(displayedPosts);
            });
          };
        }
      }).then(function(modal) {
        modal.element.modal();
        modal.close.then(function() {
        });
      });
    };
  }
}());
