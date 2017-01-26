(function() {
'use strict';
  angular.module('app')
  .service('userService', function() {
    this.checkLogInStatus = function() {
      if(parseInt($.cookie("user_info"))) {
        console.log('here');
        this.isLoggedin = true;
        return true;
      } else {
        console.log('here 2');
        this.isLoggedIn = false;
        return false;
      }
    };
  });





}());
