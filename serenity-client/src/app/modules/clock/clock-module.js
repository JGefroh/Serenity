(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('clock', {
                url: '/clock/:list_uuid',
                templateUrl: 'clock-view.html',
                controller: 'ClockController'
            });
    }
    angular
        .module('Serenity.Clock', [])
        .config(['$stateProvider', Routes]);
})();
