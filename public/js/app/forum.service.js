'use strict';
(function() {
  angular.module('app')
    .service("forumData", service);

     function service() {
      console.log("sevice loaded");
      this.posts = [];
      this.addPost = function(post) {
        this.posts.push(post);
      };
    }
}());
