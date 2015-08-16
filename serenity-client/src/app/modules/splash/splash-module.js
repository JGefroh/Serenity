(function() {
    function Routes($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('splash', {
                url: '/splash/:list_uuid',
                templateUrl: '../splash/splash-view.html',
                controller: 'SplashController'
            });
        $urlRouterProvider.otherwise('/splash/');
    }
    angular
        .module('Serenity.Splash', [])
        .config(['$urlRouterProvider', '$stateProvider', Routes]);
})();
