(function() {

  angular.module('app.auth.interceptor', [])

  .factory('AttachTokens', function($window, $q, $location) {

    return {
      request: function(object) {
        var jwt = $window.localStorage.getItem('com.app');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };

  });

}());
