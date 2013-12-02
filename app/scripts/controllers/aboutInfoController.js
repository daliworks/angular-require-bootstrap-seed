define(['controllers/controllers'],
  function(controllers) {
    'use strict';
    controllers.controller('AboutInfoCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('AboutInfoCtrl');
      }
    ]);
  }
);
