(function() {
  'use strict';
  angular.module('app.auth.signUp.controller', [
    'app.services.auth'
  ])

  .controller('SignUpController', function($state, AuthService) {

    var that = this;
    this.user = {};

    this.signUp = function(valid) {
      if (valid) {
        AuthService.signUp(that.user)
          .then(function(token) {
            AuthService.storeToken(token);
            $state.go('search');
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    };

  });
}());
