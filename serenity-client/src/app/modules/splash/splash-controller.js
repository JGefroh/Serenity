(function() {
    function Controller($state, $scope, $timeout, SecurityService) {
        function initialize() {
            $timeout(function() {
                $scope.animating = true;
            }, 10);

            SecurityService.reserveId($state.params.list_uuid).then(function(id) {
                $state.params.list_uuid = id;
            });
        }
        initialize();
    }
    angular
        .module('Serenity.Splash')
        .controller('SplashController', ['$state', '$scope', '$timeout', 'SecurityService',
                                          Controller]);
})();
