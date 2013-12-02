define(['controllers/controllers'],
  function(controllers) {
    'use strict';
    controllers.controller('HomeCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('HomeCtrl');

        $scope.title = 'Home Controller';
      }
    ]);
  }
);
