define(['controllers/controllers', 'services/httpService', 'services/restService'],
  function(controllers) {
    'use strict';
    controllers.controller('HttpCtrl', ['$scope', '$http', 'HttpService', 'RestService', '$$log',
      function($scope, $http, HttpService, RestService, $$log) {
        $scope.user = {};
        $$log.setCategory('HttpCtrl');
        $$log.log('==============Begin==============');
        
        $$log.log('==============$http.get==============');
        $http.get('api/user', {params: {id: '5'}
          }).success(function (data, status, headers, config) {
            $scope.user.id = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        $$log.log('==============$http.post==============');
        var postData = {text: 'long blob of text'},
            config = {params: {id: '5'}};

        $http.post('api/user', postData, config
          ).success(function (data, status, headers, config) {
            $scope.user.text = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        $$log.log('==============$http with Service==============');
        HttpService.get(10)
          .success(function (data, status, headers, config) {
            $scope.user.getCardResponse = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        HttpService.save({id: 10, bank: 'BOA'})
          .success(function (data, status, headers, config) {
            $scope.user.saveCardResponse = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        HttpService.query()
          .success(function (data, status, headers, config) {
            $scope.user.queryCardResponse = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        HttpService.charge({id: 50, bank: 'BOA'})
          .success(function (data, status, headers, config) {
            $scope.user.chargeCardResponse = data;
          }).error(function (data, status, headers, config) {
            $$log.error(data);
          });

        $$log.log('==============$resource with Service==============');
        var cards = RestService.query();
        $scope.user.cards = cards;  // callback is not necessary

        // We can get a single card, and work with it from the callback as well
        RestService.get({cardId: 456}, function(card) {
          console.dir(card);
          $scope.user.getCardRestResponse = card;
          console.log(card instanceof RestService);

          //each item is an instance of RestService 
          //expect(card instanceof RestService).toEqual(true);

          card.name = 'J. Smith';

          //non-GET methods are mapped onto the instances
          card.$save({amount: 10, charge: true});

          //our custom method is mapped as well.
          card.$charge({amount:9.99});
          // Makes a POST: /user/123/card/456?amount=9.99&charge=true
          // with data {id:456, number:'1234', name:'J. Smith'}
        });
      }
    ]);
  }
);
