// The app/scripts/app.js file, which defines our AngularJS app
define(['angular',
  'controllers/controllers',
  'services/services',
  'filters/filters',
  'directives/directives'
], function (angular) {
  'use strict';
  return angular.module('seedsApp', [
    'controllers',
    'services',
    'filters',
    'directives',
    'ui.router'
  ]);
});
