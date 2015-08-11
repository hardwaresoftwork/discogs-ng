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

    Discogs.getUser(user.username)
    .then(
      function( response ) {
        $scope.duser = response;
        console.log($scope.duser);
      }
    );

    Discogs.getMarketitemsByUsername('bnz')
    .then(
      function( response ) {
        $scope.marketitems = response;
        console.log($scope.marketitems);
      }
    );



    }
    ]);

    DiscogsControllers.controller('UserCtrl', ['$scope', '$routeParams', 'Discogs', '$location',
    function($scope, $routeParams, Discogs, $location) {

      $scope.project = {
        title: 'SourSound',
      };

      var username = $routeParams.username;

      Discogs.getUser(username)
      .then(
        function( response ) {
          $scope.duser = response;
          console.log($scope.duser);
        }
      );

      Discogs.getMarketitemsByUsername(username)
      .then(
        function( response ) {
          $scope.marketitems = response;
          console.log($scope.marketitems);
        }
      );



    }
    ]);


})();
