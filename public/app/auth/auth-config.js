(function() {
  'use strict';

  angular.module('app.auth.config', [
    'ui.router',
    'app.auth.controller',
    'app.auth.interceptor',
    'app.auth.signIn.config',
    'app.auth.signUp.config'
  ])

  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AttachTokens');
  })

  .run(function($state, $rootScope, AuthService) {
    function authStateInterceptor(
      event,
      toState,
      toParams,
      fromState,
      fromParams
    ) {
      if (toState.authenticate && !AuthService.isAuth()) {
        event.preventDefault();
        $state.go('signIn');
      }
    }

    $rootScope.$on('$stateChangeStart', authStateInterceptor);
  });

}());
