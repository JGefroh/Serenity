/**
 * Defines and configures all modules.
 */
(function() {
    angular
        .module('Serenity',
        [
            'ui.router',
            'ui.bootstrap',
            'Serenity.Filter',
            'Serenity.Stopwatch',
            'Serenity.Countdown',
            'Serenity.Clock',
            'Serenity.Marker',
            'Serenity.Security',
            'Serenity.Splash'
        ]);
    angular
        .module('Serenity')
        .constant('applicationName', 'Serenity')
        .constant('versionNumber', 'v0.0.1');

    angular
        .module('Serenity')
        .controller('AppCtrl', ['$state', '$scope', 'SecurityService', function($state, $scope, SecurityService) {
          SecurityService.reserveId($state.params.list_uuid);
          $scope.user = SecurityService.user;
        }]);
})();
