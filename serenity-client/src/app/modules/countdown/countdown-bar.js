(function() {
    function Directive() {
        function Controller($scope, CountdownService) {
            $scope.countdown = CountdownService.getCountdown();
            $scope.getPercentageCountdownRemaining = CountdownService.getPercentageCountdownRemaining;
        }

        return {
            restrict: 'A',
            templateUrl: 'countdown-bar.html',
            controller: ['$scope', 'CountdownService', Controller],
            scope: {
                showTime: '='
            }
        }
    }
    angular
        .module('Serenity.Countdown')
        .directive('countdownBar', Directive);
})();