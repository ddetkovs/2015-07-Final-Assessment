(function() {
  angular.module('app.services.gifService', [
    'app.constants'
  ])

  .service('GifService', function($http, ApiPath) {
    this.search = function() {
      return $http.get(ApiPath + 'search', {})

      .then(function(response) {
        return response.data === '' ? [] :
          angular.fromJson(response.data);
      });
    }


  });

}());
