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
      title: 'discogs-ng',
    };

    }
    ]);

    DiscogsControllers.controller('FeaturesCtrl', ['$scope', '$routeParams', 'Discogs', '$location', 'user',
    function($scope, $routeParams, Discogs, $location, user) {

      $scope.project = {
        title: 'discogs-ng',
      };

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

    DiscogsControllers.controller('ExampleCtrl', ['$scope', 'Discogs', '$location', 'user',
    function($scope, Discogs, $location, user) {

    //  var username = $routeParams.username;
    var username = user.username;

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
