(function() {
  angular
    .module('app.search.config', [
      'ui.router',
      'app.search.controller',
      'app.services.gifService'
    ])
    .config(function($stateProvider) {
      $stateProvider.state('search', {
        url: '/',
        parent: 'app',
        templateUrl: 'app/search/search.tpl.html',
        controller: 'SearchController',
        controllerAs: 'ctrl',
        resolve: {
          gifs: function(GifService) {
            return GifService.search();
          }
        }
      });

    });
}());
