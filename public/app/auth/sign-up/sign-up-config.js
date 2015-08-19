(function() {
  'use strict';

  angular.module('app.auth.signUp.config', [
    'ui.router',
    'app.auth.signUp.controller'
  ])

  .config(function($stateProvider) {

    $stateProvider
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'app/auth/sign-up/sign-up.tpl.html',
        controller: 'SignUpController',
        controllerAs: 'ctrl'
      });

  });
}());
