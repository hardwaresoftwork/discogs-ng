/**
* Created by Erik Woitschig on 3/9/15.
* http://www.sourcloud.com
*/

(function(){

  var DiscogsControllers = angular.module('DiscogsControllers', []);

  // example user
  DiscogsControllers.value('user', {
    username: 'bnz'
  });

  DiscogsControllers.controller('HomeCtrl', ['$scope', '$routeParams', 'Discogs', '$location', 'user',
  function($scope, $routeParams, Discogs, $location, user) {

    $scope.project = {
      title: 'SourSound',
    };

    Discogs.getUser('bnz')
    .then(
      function( response ) {
        $scope.duser = response;
        console.log($scope.duser);
      }
    );

    Discogs.getMarketitemsByUsername('bnz')
    .then(
      function( response ) {
        $scope.userdata = response;
        console.log($scope.userdata);
      }
    );



    }
    ]);

})();
