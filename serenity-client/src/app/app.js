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
            'Serenity.Splash'
        ]);
    angular
        .module('Serenity')
        .constant('applicationName', 'Serenity')
        .constant('versionNumber', 'v0.0.1');

    angular
        .module('Serenity')
        .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
        }]);
})();
