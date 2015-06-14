(function() {
    function Controller($scope,
                        ClockService) {
        function initialize() {
            $scope.clock = ClockService.getClock();
            $scope.toggleMilitaryTime = ClockService.toggleMilitaryTime;
            $scope.toggleMilitaryDate = ClockService.toggleMilitaryDate;
        }

        initialize();
    }
    angular
        .module('Serenity.Clock')
        .controller('ClockController', ['$scope',
                                        'ClockService',
                                        Controller]);
})();