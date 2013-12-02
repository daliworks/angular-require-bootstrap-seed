define(['directives/directives'], function (directives) {
  'use strict';
  directives.directive('dwNoti',
      ['$rootScope', '$$RestService', '$$log',
      function ($rootScope, $$RestService, $$log) {
    return {
      restrict: 'EA',
      replace: true,
      transclude: true,
      scope: { noti: '=source' },
      templateUrl: 'views/templates/nwNoti.html',
      link: function (scope, element, attrs) {
        var noti = scope.noti,
            icon = noti.severity === 'alert' ? 'icon-warning-sign' : 'icon-comment',
            nodeTypeSet, nodeCategory;

        nodeTypeSet = {
          gatewayStatus: 'G',
          sensorStatus: 'Ss',
          sensorValue: 'Sv',
          storageStatus: 'St'
        };
        nodeCategory = {
          gatewayStatus: 'gateways',
          sensorStatus: 'sensors',
          sensorValue: 'sensors',
          storageStatus: 'storages'
        };

        scope.checked = (noti.checked === 'true');
        scope.nodeType = nodeTypeSet[noti.type];
        scope.nodeCategory = nodeCategory[noti.type];
        scope.icon = icon;

        scope.check = function () {
          var checkNoti = $$RestService.timeline().get({timelineId: noti.id}, function (result) {
            $$log.log(result);
            checkNoti.checked = true;
            checkNoti.$update();
          });
        };
      }
    };
  }]);
});
