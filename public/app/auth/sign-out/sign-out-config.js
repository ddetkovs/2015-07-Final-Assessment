
(function() {
  'use strict';

  angular.module('app.auth.signOut.config', [
    'ui.router',
    'app.services.auth'
  ])

  .config(function($stateProvider) {
    $stateProvider
      .state('signOut', {
        url: '/signout',
        controller: function ($state, AuthService) {
          AuthService.signOut();
          $state.go('signIn');
        }
      });
  });

}());
