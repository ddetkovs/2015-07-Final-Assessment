(function() {
  angular
    .module('app', ['ui.router'])
    .config(function($stateProvider) {
      $stateProvider.state('app', {
        templateUrl: 'app.tpl.html',
        controller: function() {

        },
      });
    });
}());
