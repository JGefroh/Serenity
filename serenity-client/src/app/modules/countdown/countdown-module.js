(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('countdown', {
                url: '/countdown',
                templateUrl: 'countdown-view.html',
                controller: 'CountdownController'
            });
    }
    angular
        .module('Serenity.Countdown', [])
        .config(['$stateProvider', Routes]);
})();