(function() {
    function Service($interval) {
        var self = this;
        var splits = [];
        var stopwatch = {
            timeTrackedInMs: 0,
            timestampTrackingStarted: null,
            tracking: false,
            trackingInterval: null
        };

        self.getStopwatch = function() {
            return stopwatch;
        };


        self.startStopwatch = function() {
            self.stopStopwatch();
            stopwatch.tracking = true;
            stopwatch.timestampTrackingStarted = new Date();
            stopwatch.trackingInterval = $interval(function() {
                bankTrackedTime();
            }, 50);
        };

        function bankTrackedTime() {
            if (stopwatch.tracking) {
                var now = new Date();
                var differenceInMs = now.getTime() - stopwatch.timestampTrackingStarted.getTime();
                stopwatch.timeTrackedInMs += differenceInMs;
                stopwatch.timestampTrackingStarted = now;
            }
        }

        self.resetStopwatch = function() {
            stopwatch.timeTrackedInMs = 0;
            splits.length = 0;
        };

        self.stopStopwatch = function() {
            bankTrackedTime();
            stopwatch.tracking = false;
            $interval.cancel(stopwatch.trackingInterval);
            stopwatch.timestampTrackingStarted = null;
        };

        self.toggleStopwatch = function() {
            if (stopwatch.tracking) {
                self.stopStopwatch();
            }
            else {
                self.startStopwatch();
            }
        };

        self.getSplits = function() {
            return splits;
        };

        self.recordSplit = function() {
            if (stopwatch.tracking) {
                bankTrackedTime();
                var split = {
                    timestamp: new Date(),
                    timeTrackedInMs: stopwatch.timeTrackedInMs
                };
                splits.push(split);
            }
        };
    }
    angular
        .module('Serenity.Stopwatch')
        .service('StopwatchService', ['$interval',
                                      Service]);
})();