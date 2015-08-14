(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('stopwatch', {
                url: '/stopwatch',
                templateUrl: 'stopwatch-view.html',
                controller: 'StopwatchController'
            });
    }
    angular
        .module('Serenity.Stopwatch', [])
        .config(['$stateProvider', Routes]);
})();