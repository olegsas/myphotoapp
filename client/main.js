var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'loginController'
    })
    .when('/logout', {
      controller: 'logoutController'
    })
    .when('/register', {
      templateUrl: 'templates/register.html',
      controller: 'registerController'
    })
    .when('/one', {
      template: '<h1>This is page one!</h1>'
    })
    .when('/two', {
      template: '<h1>This is page two!</h1>'
    })
    .otherwise({
      redirectTo: '/'
    });
});