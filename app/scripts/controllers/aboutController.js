define([
  'controllers/controllers',
  'controllers/aboutInfoController',
  'controllers/aboutHintController'
],
  function(controllers) {
    'use strict';
    controllers.controller('AboutCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('AboutCtrl');
      }
    ]);
  }
);
