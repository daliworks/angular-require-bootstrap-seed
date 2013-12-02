define(['services/services'],
  function(services) {
    'use strict';
    services.factory('HttpService', ['$http', function($http) {
      var baseUrl = '/api/user/123/card';
      return {
        get: function (cardId) {
          return $http.get(baseUrl + '/' + cardId);
        },
        save: function (card) {
          var url = card.id ? baseUrl + '/' + card.id : baseUrl;
          return $http.post(url, card);
        },
        query: function () {
          return $http.get(baseUrl);
        },
        charge: function (card) {
          return $http.post(baseUrl + '/' +card.id, card, {params: {charge: true}});
        }
      };
    }]);
  }
);
