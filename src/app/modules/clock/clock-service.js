(function() {
    function Service($interval) {
        var self = this;
        var clock = {
            currentTimestamp: null,
            updateIntervalInMs: 100,
            updateInterval: null,
            timeFormat: '',
            dateFormat: '',
            showingMilitaryTime: true,
            showingMilitaryDate: true
        };

        self.getClock = function() {
            return clock;
        };

        self.toggleMilitaryTime = function() {
            if (clock.showingMilitaryTime) {
                clock.showingMilitaryTime = false;
                clock.timeFormat = 'hh:mm:ss a';
            }
            else {
                clock.showingMilitaryTime = true;
                clock.timeFormat = 'HH:mm:ss';
            }
        };

        self.toggleMilitaryDate = function() {
            if (clock.showingMilitaryDate) {
                clock.showingMilitaryDate = false;
                clock.dateFormat = 'EEEE MMMM dd, yyyy';
            }
            else {
                clock.showingMilitaryDate = true;
                clock.dateFormat = 'EEEE dd MMMM yyyy';
            }
        };

        function updateClock() {
            clock.currentTimestamp = new Date();
        }

        function initializeClock() {
            self.toggleMilitaryTime();
            self.toggleMilitaryDate();
            if (!clock.updateInterval) {
                clock.updateInterval = $interval(function() {
                    updateClock();
                }, clock.updateIntervalInMs);
            }
        }

        initializeClock();
    }
    angular
        .module('Serenity.Clock')
        .service('ClockService', ['$interval',
                                  Service]);
})();