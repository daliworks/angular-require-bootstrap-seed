define([
  'controllers/controllers',
  'i18n!nls/labels',
  'pace',
  'jqueryAnimateEnhanced',
  'sidr',
  'touchSwipe'
],
    function(controllers, labels, pace) {
      'use strict';
      controllers.controller('MenuCtrl', ['$scope', '$timeout', '$location', '$$log',
        function($scope, $timeout, $location, $$log) {
          var sideMenuName = 'sidr-main';

          function slideMenuClose() {
            $.sidr('close', sideMenuName);
            $('#page-cover').removeClass('page-cover-enabled');
            $('#cover-close').css('display', 'none');
          }

          function slideMenuOpen() {
            $.sidr('open', sideMenuName);
            $('#page-cover').addClass('page-cover-enabled');
            $('#cover-close').css('display', 'block').on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              slideMenuClose();
            });
            $('#' + sideMenuName).on('touchmove', function (e) {
              e.preventDefault();
              e.stopPropagation();
            });
          }

          function enableSwipeEvent() {
            var $container = $('#main-container');

            $container.swipe({
              swipeRight: function () {
                slideMenuOpen();
              },
              swipeLeft: function () {
                slideMenuClose();
              },
              tap: function (event, target) {
                var e = new $.Event('click');
                if (event.changedTouches) {
                  e.pageX = event.changedTouches[0].pageX;
                  e.pageY = event.changedTouches[0].pageY;
                }
                $(target).trigger(e);
              }
            });
            $container.swipe('option', 'threshold', 125);
            $container.swipe('option', 'triggerOnTouchEnd', true);
            $container.swipe('option', 'maxTimeThreshold', 300);
          }

          $$log.setCategory('MenuCtrl');

          $scope.labels = labels;

          pace.start({
            ajax: {
              trackWebSockets: false
            }
          });

          if ($(window).width() < 768) {
            enableSwipeEvent();
          }

          // delay applying sidr for the $scope.labels being ready
          $timeout(function () {
            $('#slide-menu-button').sidr({
              name: sideMenuName,
              source: '#menu-list',
              body: '#main-container',
              speed: 400
            });

            $('#slide-menu-button').on('click', function (){
              slideMenuOpen();
            });

            $('#' + sideMenuName).on('click', 'a', function () {
              slideMenuClose();
            });
          });
        }
      ]);
    }
);