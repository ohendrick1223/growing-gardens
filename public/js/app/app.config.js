'use strict';

var socket = io();

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
        url: "/garden-selection",
        component: "land"
      })
      .state({
        name: "garden",
        parent: "app",
        abstract: true,
        url: "/garden",
        component: "garden"
        // params: {
        //   gardenName: "all" //can the template load according to this param?
        // }
        //TODO make this a parent component with each garden as a different state/template URL
        // Can this be abstract?
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
        name: "centennial",
        parent: "garden",
        url: '/centennial',
        component: "centennial"
      })
      .state({
        name: "hawthorne",
        parent: "garden",
        url: '/hawthorne',
        component: "hawthorne"
      })
      .state({
        name: "foothills",
        parent: "garden",
        url: '/foothills',
        component: "foothills"
      })
      .state({
        name: "hope",
        parent: "garden",
        url: '/hope',
        component: "hope"
      })
      .state({
        name: "eleventh",
        parent: "garden",
        url: '/eleventh',
        component: "eleventh"
      })
      .state({
        name: "kerr",
        parent: "garden",
        url: '/kerr',
        component: "kerr"
      })
      .state({
        name: "livingHarvest",
        parent: "garden",
        url: '/living-harvest',
        component: "livingHarvest"
      });
  }
}());
