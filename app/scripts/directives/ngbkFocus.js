define(['directives/directives'], function(directives) {
  'use strict';
  directives.directive('ngbkFocus', ['$rootScope', '$$log', function($rootScope, $$log) {
    $$log.setCategory('ngbkFocus');
    $$log.log('log level log');    
    return {
      restrict: 'A',
      scope: true,
      link: function(scope, element, attrs) {
        element[0].focus();
      }
    };
  }]);
});
