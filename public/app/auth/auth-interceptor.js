(function() {

  angular.module('app.auth.interceptor', [])

  .factory('AttachTokens', function($window) {

    return {
      request: function(object) {
        var jwt = $window.localStorage.getItem('com.shortly');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };

  });

}());
