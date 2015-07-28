var SourSoundApp = angular.module('SourSoundApp', [
'ngRoute',
'timelineControllers',
'ngMessages',
'routeStyles',
'skillsrender.directive',
'langrender.directive',
'Discogs'
]);
/*
SourSoundApp.config(['$httpProvider', function($httpProvider) {
$httpProvider.defaults.useXDomain = true;
delete $httpProvider.defaults.headers.common['X-Requested-With'];
}
]);
*/

SourSoundApp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'views/start.html',
    controller: 'HomeCtrl'
  }).

otherwise({
  redirectTo: '/home'
});
}]);
