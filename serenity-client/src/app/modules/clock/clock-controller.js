(function() {
    function Controller($scope,
                        $stateParams,
                        ClockService,
                        MarkerService,
                        SecurityService) {
        function initialize() {
            SecurityService.reserveId($stateParams.list_uuid);
            $scope.clock = ClockService.getClock();
            $scope.toggleMilitaryTime = ClockService.toggleMilitaryTime;
            $scope.toggleMilitaryDate = ClockService.toggleMilitaryDate;
            $scope.operations = {
              createMarker: {},
              markers: {}
            }
            loadData();
        }

        function loadData() {
          MarkerService.getMarkers(SecurityService.user.id).then(function(markers) {
            $scope.markers = markers;
          });
        }

        $scope.createMarker = function() {
          $scope.operations.createMarker.status = 'LOADING';
          MarkerService.createMarker({list_uuid: SecurityService.user.id}, SecurityService.user.id).then(function(marker) {
            $scope.markers.push(marker);
          }).finally(function() {
            $scope.operations.createMarker.status = null;
          });
        }

        $scope.updateMarker = function(marker) {
          MarkerService.updateMarker(marker, SecurityService.user.id);
        }

        $scope.deleteMarker = function(marker) {
          $scope.operations.markers[marker.id] = {
            status: 'LOADING'
          }
          MarkerService.deleteMarker(marker.id, SecurityService.user.id).then(function() {
            $scope.markers.splice($scope.markers.indexOf(marker), 1);
          }).finally(function() {
            delete $scope.operations.markers[marker.id];
          });
        }

        initialize();
    }
    angular
        .module('Serenity.Clock')
        .controller('ClockController', ['$scope',
                                        '$stateParams',
                                        'ClockService',
                                        'MarkerService',
                                        'SecurityService',
                                        Controller]);
})();
