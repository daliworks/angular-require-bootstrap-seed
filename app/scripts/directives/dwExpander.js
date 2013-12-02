define(['directives/directives'], function (directives) {
  'use strict';
  directives.directive('dwExpander', ['$rootScope', function ($rootsCope) {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      require: '^?dwAccordion',
      scope: { title: '=expanderTitle' },
      templateUrl: 'views/templates/dwExpander.html',
      link: function (scope, element, attrs, accordionController) {
        scope.showMe = false;

        try {
          accordionController.addExpander(scope);
        } catch (e) {
          console.error('Exception error when calling accordionController at dwExpander.js', e);
        }

        scope.toggle = function toggle() {
          scope.showMe = !scope.showMe;
          accordionController.gotOpened(scope);
        };
      }
    };
  }]);
});
