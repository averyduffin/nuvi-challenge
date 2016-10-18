/**
 * Created by DuffinAM on 10/14/2016.
 */
'use strict';

var herokuServices = angular.module('herokuServices', ['ngResource']);
/**
 * Request used to RESTfully interact with cctv_config
 */
herokuServices.factory('Heroku', ['$resource',
    function($resource){
        return $resource('https://nuvi-challenge.herokuapp.com/activities', {}, {
            query: {
                isArray: true,
                method: 'GET',
            }
        });
    }]);