/**
* Created by Erik Woitschig on 3/9/15.
* http://www.sourcloud.com
*/

(function(){

  var timelineControllers = angular.module('timelineControllers', []);

  // example user
  timelineControllers.value('user', {
    name: 'bnzlovesyou',
    firstname: '',
    url: 'http://soundcloud.com/bnzlovesyou',
    id: 1672444,
    trackid: 13158665,
    playlistid: 751573,
    groupid: 28743,
    commentid: 211972068,
    genre: 'house'
  });

  timelineControllers.controller('HomeCtrl', ['$scope', '$routeParams', 'Discogs', '$location', 'user',
  function($scope, $routeParams, Discogs, $location, user) {

    $scope.project = {
      title: 'SourSound',
    };


    Discogs.getUser('bnz')
    .then(
      function( response ) {
        $scope.user = response;
        console.log($scope.user);
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
