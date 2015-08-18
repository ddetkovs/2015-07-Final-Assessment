(function() {
  'use strict';
  angular.module('app.auth.signIn.controller', [
    'app.services.auth'
  ])

  .controller('SignInController', function(AuthService, $state) {
    var that = this;
    this.user = {};

    this.signIn = function(valid) {
      if (valid) {
        AuthService.signIn(that.user)
          .then(function(token) {
            AuthService.storeToken(token);
            $state.go('links');
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    };

  })
}());
