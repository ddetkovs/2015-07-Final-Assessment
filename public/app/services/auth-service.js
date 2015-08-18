(function() {
  'use strict';

  angular.module('app.services.auth', [])

  .service('AuthService', function($http, $state, $window) {
    this.signIn = function(user) {
      return $http({
          method: 'POST',
          url: '/api/users/signin',
          data: user
        })
        .then(function(resp) {
          return resp.data.token;
        });
    };

    this.signUp = function(user) {
      return $http({
          method: 'POST',
          url: '/api/users/signup',
          data: user
        })
        .then(function(resp) {
          return resp.data.token;
        });
    };

    this.isAuth = function() {
      return !!$window.localStorage.getItem('com.app');
    };

    this.signOut = function() {
      $window.localStorage.removeItem('com.app');
    };

    this.storeToken = function (token) {
      $window.localStorage.setItem('com.app', token);
    };

  });

}());
