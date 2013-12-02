define(['services/services'],
  function(services) {
    'use strict';
    services.factory('UserService', [
      function() {
        return {
          getUser: function() {
            return 'testUser';
          }
        };
      }
    ]);
  }
);
