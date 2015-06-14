(function() {
    function Routes($stateProvider) {
        $stateProvider
            .state('splash', {
                url: '',
                templateUrl: '../splash/splash-view.html',
                controller: 'SplashController'
            });
    }
    angular
        .module('Serenity.Splash', [])
        .config(['$stateProvider', Routes]);
})();