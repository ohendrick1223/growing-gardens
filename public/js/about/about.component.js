'use strict';
(function() {
  angular.module("app")
    .component("about", {
      templateUrl: "js/about/about.template.html",
      controller: controller
    })

  controller.$inject = ["$http", "$state", "$stateParams"];

  function controller($http, $state, $stateParams) {
    const vm = this;

    vm.slides = [];
    vm.myInterval = 3000;
    vm.noWrapSlides = false;
    vm.active = 0;

    vm.$onInit = function() {

      vm.slides = [{
          image: '../../assets/carousel/slider1.jpg',
          id: 0,
        },
        {
          image: '../../assets/carousel/slider2.jpg',
          id: 1,
        },
        {
          image: '../../assets/carousel/slider3.jpg',
          id: 2,
        },
        {
          image: '../../assets/carousel/slider4.jpg',
          id: 3,
        }
      ];


    };
  }
}());
