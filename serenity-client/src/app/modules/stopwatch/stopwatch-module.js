(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('stopwatch', {
                url: '/stopwatch/:list_uuid',
                templateUrl: 'stopwatch-view.html',
                controller: 'StopwatchController'
            });
    }
    angular
        .module('Serenity.Stopwatch', [])
        .config(['$stateProvider', Routes]);
})();
