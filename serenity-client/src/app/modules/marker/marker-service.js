(function() {
    function Service($http) {
        var self = this;

        var endpoints = {
          createMarker: function() {
            return 'api/markers';
          },
          getMarkers: function() {
            return 'api/markers';
          },
          updateMarker: function(id) {
            return 'api/markers/' + id;
          },
          deleteMarker: function(id) {
            return 'api/markers/' + id;
          }
        }

        self.createMarker = function(marker, uuid) {
          return $http.post(endpoints.createMarker(), marker, {params: {list_uuid: uuid}}).then(function(response) {
            return response.data;
          });
        }

        self.updateMarker = function(marker, uuid) {
          return $http.put(endpoints.updateMarker(marker.id), marker, {params: {list_uuid: uuid}}).then(function(response) {
            return response.data;
          });
        }

        self.deleteMarker = function(id, uuid) {
          return $http.delete(endpoints.deleteMarker(id), {params: {list_uuid: uuid}}).then(function(response) {
            return response.data;
          });
        }

        self.getMarkers = function(uuid) {
          return $http.get(endpoints.getMarkers(), {params:{list_uuid: uuid}}).then(function(response) {
            return response.data;
          });
        }
    }
    angular
        .module('Serenity.Marker')
        .service('MarkerService', ['$http',
                                      Service]);
})();
