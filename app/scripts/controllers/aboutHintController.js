define(['controllers/controllers'],
  function(controllers) {
    'use strict';
    controllers.controller('AboutHintCtrl', ['$scope', '$$log',
      function($scope, $$log) {
        $$log.setCategory('AboutHintCtrl');
      }
    ]);
  }
);
