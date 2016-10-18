'use strict';

/* Controllers */

var LandingPageControllers = angular.module('LandingPageControllers', ['ngResource']);

LandingPageControllers.controller('landingPageController', ['$scope', 'Heroku', '$resource', function($scope, Heroku, $resource){

    var promise = Heroku.query();
    $scope.facebook = 0;
    $scope.instagram = 0;
    $scope.twitter = 0;
    $scope.tumblr = 0;
    promise.$promise.then(function(data){
        console.log(data)
        $scope.activities = data;
        

        angular.forEach(data, function(activity){
            
            if(activity.provider == 'facebook'){
                $scope.facebook += 1;
            }
            else if(activity.provider == 'instagram'){
                $scope.instagram += 1;
            }
            else if(activity.provider == 'twitter'){
                $scope.twitter += 1;
            }
            else if(activity.provider == 'tumblr'){
                $scope.tumblr += 1;
            }
            else{
                //do nothing
            }
        });
    });

}]);