'use strict';

angular
  .module('TTApp', [
    'ngAnimate'
    ,'ngCookies'
    ,'ngMessages'
    ,'ngResource'
    ,'ngSanitize'
    ,'ngTouch'
    ,'ui.bootstrap'
    ,'ui.router'
  ])
  .config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
      });
  });
