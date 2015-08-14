(function() {
    function Controller($scope,
                        ClockService,
                        MarkerService) {
        function initialize() {
            $scope.clock = ClockService.getClock();
            $scope.toggleMilitaryTime = ClockService.toggleMilitaryTime;
            $scope.toggleMilitaryDate = ClockService.toggleMilitaryDate;
            loadData();
        }

        function loadData() {
          MarkerService.getMarkers().then(function(markers) {
            $scope.markers = markers;
          });
        }



        $scope.createMarker = function() {
          MarkerService.createMarker({list_uuid: 'TEST-01-UUID'}).then(function(marker) {
            $scope.markers.push(marker);
          });
        }

        $scope.updateMarker = function(marker) {
          MarkerService.updateMarker(marker).then(function(marker) {
          });
        }

        $scope.deleteMarker = function(marker) {
          MarkerService.deleteMarker(marker.id, 'TEST-01-UUID').then(function() {
            $scope.markers.splice($scope.markers.indexOf(marker), 1);
          });
        }

        initialize();
    }
    angular
        .module('Serenity.Clock')
        .controller('ClockController', ['$scope',
                                        'ClockService',
                                        'MarkerService',
                                        Controller]);
})();
