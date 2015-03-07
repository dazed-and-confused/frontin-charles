(function () {
  "use strict";
  angular.module('frontin', [
  'ngRoute',
  'ngAnimate',
  'admin',
  'login',
  'frontmain'
  ])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/not-found', {
      templateUrl: 'views/404.html',
      controller: 'MainController as mainCtrl'
    })
    .otherwise({
      redirectTo: '/not-found'
    })
  });

})();