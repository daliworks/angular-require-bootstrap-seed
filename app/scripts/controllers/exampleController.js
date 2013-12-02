define(['controllers/controllers'],
  function(controllers) {
    'use strict';
    controllers.controller('ExampleCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('ExampleCtrl');
      }
    ]);
  }
);
