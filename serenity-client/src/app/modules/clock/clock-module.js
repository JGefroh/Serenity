(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('clock', {
                url: '/clock',
                templateUrl: 'clock-view.html',
                controller: 'ClockController'
            });
    }
    angular
        .module('Serenity.Clock', [])
        .config(['$stateProvider', Routes]);
})();