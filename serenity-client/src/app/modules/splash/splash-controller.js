(function() {
    function Controller($scope, $timeout) {
        function initialize() {
            $timeout(function() {
                $scope.animating = true;
            }, 10);
        }
        initialize();
    }
    angular
        .module('Serenity.Splash')
        .controller('SplashController', ['$scope', '$timeout',
                                          Controller]);
})();