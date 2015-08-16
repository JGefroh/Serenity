(function() {
    function Service($stateParams, $q, $http) {
      var self = this;
      var endpoints = {
         getID: function() {
            return 'api/security';
         }
      };
      this.user = {id: $stateParams.list_uuid};

      this.reserveId = function(list_uuid) {
         var deferred = $q.defer();
         if (!list_uuid || list_uuid === 'newuser') {
             $http.get(endpoints.getID()).then(function(response) {
                 $stateParams.list_uuid = response.data;
                 self.user.id = response.data;
                 deferred.resolve(self.user.id);
             });
         }
         else {
             $stateParams.list_uuid = list_uuid;
             self.user.id = list_uuid;
             deferred.resolve(self.user.id);
         }
         return deferred.promise;
      }


    }
    angular
        .module('Serenity.Security')
        .service('SecurityService', ['$stateParams', '$q', '$http',
                                      Service]);
})();
