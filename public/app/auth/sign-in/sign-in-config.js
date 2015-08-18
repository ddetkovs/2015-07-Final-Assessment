(function() {
  'use strict';

  angular.module('app.auth.signIn.config', [
    'ui.router',
    'app.auth.signIn.controller'
  ])

  .config(function($stateProvider) {

    $stateProvider
      .state('signIn', {
        url: '/signin',
        templateUrl: 'app/auth/sign-in/sign-in.tpl.html',
        controller: 'SignInController',
        controllerAs: 'ctrl'
      });
  });
}());
