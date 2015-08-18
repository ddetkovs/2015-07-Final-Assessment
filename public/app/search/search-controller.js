(function() {
  angular
    .module('app.search.controller', [
      'ui.router'
    ])

    .controller('SearchController', function(gifs) {
      console.log(gifs);
      this.gifs = gifs.data;
    });
}());
