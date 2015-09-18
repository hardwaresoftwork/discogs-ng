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
