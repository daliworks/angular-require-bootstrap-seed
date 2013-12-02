define(['services/services'],
    function (services) {
      'use strict';
      services.factory('$$RestService', ['$resource', '$http', function ($resource, $http) {
        var baseUrl = ''; //https://api.twitter.com/1.1

        return {
          search: function () {
            return $resource(baseUrl + '/search/tweets.json',
                {},
                {update: {method: 'PUT'}});
          }
        };
      }]);
    }
);