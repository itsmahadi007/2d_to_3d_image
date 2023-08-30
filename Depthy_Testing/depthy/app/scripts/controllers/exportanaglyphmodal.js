'use strict';

angular.module('depthyApp')
.controller('ExportAnaglyphModalCtrl', function ($scope, $sce, $timeout, $window, depthy) {
  $scope.loading = true;
  // wait for animation
  $timeout(function() {
    depthy.getViewer().exportAnaglyph({}).then(
      function(url) {
        // shorten this!
        url = URL.createObjectURL($window.dataURItoBlob(url));
        var img = angular.element('img[image-source="export-anaglyph-modal"]')[0];
        img.onload = function() {
          $scope.loading = false;
          $scope.$safeApply();
        };
        img.src = url;
        angular.element('a[image-source="export-anaglyph-modal"]').attr('href', url);
      }
    );
  }, depthy.modalWait);
});
