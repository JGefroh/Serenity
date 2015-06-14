(function() {
    function Service($interval) {
        var self = this;
        var countdown = {
            timestampCountingStarted: null,
            countdownTimerInMs: 0,
            inputTime: '25m',
            timeRemainingInMs: 0,
            counting: false,
            countdownInterval: null
        };

        self.getCountdown = function() {
            return countdown;
        };

        self.setCountdownTimer = function(input) {
            var timeInput = null;
            if (isInEnglish(input)) {
                timeInput = convertToMsFromEnglish(input);
            }
            countdown.countdownTimerInMs = timeInput;
            if (!countdown.counting) {
                self.resetCountdown();
            }
        };

        function isInEnglish(input) {
            return input.indexOf('h') !== -1 || input.indexOf('m') !== -1 || input.indexOf('s') !== -1;
        }

        function convertToMsFromEnglish(input) {
            var matches = input.match(/[0-9]+[a-z]/ig);
            var time = 0;
            angular.forEach(matches, function(match) {
                if (match.indexOf('h') !== -1) {
                    time += Number(match.slice(0, -1)) * 3600000;
                }
                else if (match.indexOf('m') !== -1) {
                    time += Number(match.slice(0, -1)) * 60000;
                }
                else if (match.indexOf('s' !== -1)) {
                    time += Number(match.slice(0, -1) * 1000);
                }
            });
            return time;
        }

        self.startCountdown = function() {
            countdown.counting = true;
            countdown.timestampCountingStarted = new Date();
            countdown.countingInterval = $interval(function() {
                updateCounter();
            }, 50);
        };

        function updateCounter() {
            if (countdown.counting) {
                var now = new Date();
                var differenceInMs = now.getTime() - countdown.timestampCountingStarted.getTime();
                if (countdown.timeRemainingInMs - differenceInMs <= 0) {
                    self.stopCountdown();
                    countdown.timeRemainingInMs = 0;
                }
                else {
                    countdown.timeRemainingInMs -= differenceInMs;
                    countdown.timestampCountingStarted = now;
                }
            }
        }

        self.stopCountdown = function() {
            countdown.counting = false;
            $interval.cancel(countdown.countingInterval);
            countdown.timestampCountingStarted = null;
        };

        self.resetCountdown = function() {
            countdown.timeRemainingInMs = countdown.countdownTimerInMs;
        };

        self.toggleCountdown = function() {
            if (countdown.counting) {
                self.stopCountdown();
            }
            else {
                if (countdown.timeRemainingInMs === 0) {
                    self.resetCountdown();
                }
                else {
                    self.startCountdown();
                }
            }
        };

        self.setCountdownTimer(countdown.inputTime);
    }
    angular
        .module('Serenity.Countdown')
        .service('CountdownService', ['$interval',
                                      Service]);
})();