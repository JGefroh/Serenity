(function() {
    function Controller($scope,
                        StopwatchService) {
        function initialize() {
            $scope.stopwatch = StopwatchService.getStopwatch();
            $scope.splits = StopwatchService.getSplits();
        }


        $scope.startStopwatch = StopwatchService.startStopwatch;
        $scope.stopStopwatch = StopwatchService.stopStopwatch;
        $scope.recordSplit = StopwatchService.recordSplit;
        $scope.toggleStopwatch = StopwatchService.toggleStopwatch;
        $scope.resetStopwatch = StopwatchService.resetStopwatch;

        initialize();
    }
    angular
        .module('Serenity.Stopwatch')
        .controller('StopwatchController', ['$scope',
                                            'StopwatchService',
                                            Controller]);
})();