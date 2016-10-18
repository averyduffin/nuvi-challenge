/**
 * Created by DuffinAM on 10/7/2015.
 */
'use strict';

/* Controllers */

var page3Controllers = angular.module('page3Controllers', []);

page3Controllers.controller('page3Controller', ['$scope', 'exampleService', function($scope, exampleService){
	$scope.title = "Services Examples";
	$scope.paragraph = "This is a demo page for how to create and use services";
	
	$scope.service = new exampleService();
	$scope.service.$query(function(data){
		//console.log(data);
	})
}]);