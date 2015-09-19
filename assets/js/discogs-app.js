var SourSoundApp = angular.module('SourSoundApp', [
'ngRoute',
'DiscogsControllers',
'Discogs'
]);


SourSoundApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'views/start.html',
    controller: 'HomeCtrl'
  }).
  when('/features', {
    templateUrl: 'views/features.html',
    controller: 'FeaturesCtrl'
  }).
  when('/example', {
    templateUrl: 'views/example.html',
    controller: 'ExampleCtrl'
  }).
  when('/user/:username', {
    templateUrl: 'views/start.html',
    controller: 'UserCtrl'
  }).
otherwise({
  redirectTo: '/home'
});
}]);

SourSoundApp.factory('myGoogleAnalytics', [
  '$rootScope', '$window', '$location',
  function ($rootScope, $window, $location) {

    var myGoogleAnalytics = {};
    var repoLocation = 'discogs-ng/#';

    myGoogleAnalytics.sendPageview = function() {
      if ($window.ga) {
        $window.ga('set', 'page', repoLocation + $location.path());
        $window.ga('send', 'pageview');
      }
    }

    // subscribe to events
    $rootScope.$on('$viewContentLoaded', myGoogleAnalytics.sendPageview);

    return myGoogleAnalytics;
  }
])
SourSoundApp.run([
  'myGoogleAnalytics',
  function(myGoogleAnalytics) {
      // inject self
  }
]);
