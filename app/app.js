'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'LandingPageControllers',
  'herokuServices'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landing', {
        templateUrl: 'app/components/landing/landing.html',
        controller: 'landingPageController'
      }).
      otherwise({redirectTo: '/landing'});
}]);
