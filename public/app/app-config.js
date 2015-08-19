(function() {
  angular.module('app', [
    'ui.router',
    'ngMaterial',

    'app.search.config',
    'app.services.auth',
    'app.auth.config'
  ])

  .config(function($stateProvider) {
    $stateProvider.state('app', {
      templateUrl: 'app/app.tpl.html',
      controller: function($state, AuthService) {
        this.isAuth = function(){
          return AuthService.isAuth();
        }
      },
      controllerAs: 'ctrl'
    });
  })

  .run(function($rootScope) {
    $rootScope.$on('$stateChangeError',
      function(event, toState, toParams, fromState, fromParams, error) {
        console.error(
          event, toState, toParams, fromState, fromParams, error);
      });
  })
}());
