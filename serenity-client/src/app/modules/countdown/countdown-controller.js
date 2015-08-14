(function() {
    function Controller($scope,
                        CountdownService) {
        function initialize() {
            $scope.countdown = CountdownService.getCountdown();
        }

        $scope.toggleCountdown = CountdownService.toggleCountdown;
        $scope.resetCountdown = CountdownService.resetCountdown;
        $scope.setCountdownTimer = CountdownService.setCountdownTimer;
        $scope.getPercentageCountdownRemaining = CountdownService.getPercentageCountdownRemaining;

        initialize();
    }
    angular
        .module('Serenity.Countdown')
        .controller('CountdownController', ['$scope',
                                            'CountdownService',
                                            Controller]);
})();