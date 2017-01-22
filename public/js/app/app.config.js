'use strict';
(function() {
  angular
    .module("app")
    .config(config)

  config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

  function config($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
      .state({
        name: "app",
        abstract: true,
        component: "app"
      })
      .state({
        name: "home",
        parent: "app",
        url: "/",
        component: "home"
      })
      .state({
        name: "forum",
        parent: "app",
        url: "/forum/:category",
        component: "forum",
        params: {
          category: "all"
        }
      })
      .state({
        name: "land",
        parent: "app",
        url: "/land/:garden",
        component: "land",
        params: {
          garden: "all",
          // plotId: 1 /:plotId
        }
      })
      .state({
        name: "about",
        parent: "app",
        url: "/about",
        component: "about"
      })
      .state({
        name: "produce",
        parent: "app",
        url: "/produce",
        component: "produce"
      })
      .state({
        name: "login",
        parent: "app",
        url: "/login",
        component: "login"
      })
      .state({
        name: "registration",
        parent: "app",
        url: "/registration",
        component: "registration"
      });
  }
}());
