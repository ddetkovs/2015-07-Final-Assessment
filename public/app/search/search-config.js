(function() {
  angular
    .module('app.search.config', [
      'ui.router',
      'app.search.controller'
    ])

    .config(function($stateProvider) {

      $stateProvider.state('app.search', {
        templateUrl: 'search/search.tpl.html',
        controller: 'SearchController',
        resolve: {
          gifs: function () {
            return [];
          }
        }
      });

    });
}());
