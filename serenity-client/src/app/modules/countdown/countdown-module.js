(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('countdown', {
                url: '/countdown/:list_uuid',
                templateUrl: 'countdown-view.html',
                controller: 'CountdownController'
            });
    }
    angular
        .module('Serenity.Countdown', [])
        .config(['$stateProvider', Routes]);
})();
