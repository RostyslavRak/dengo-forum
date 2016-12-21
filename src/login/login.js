/**
 * Home controller
 *
 * @author Dima Zelenyuk
 */



angular.module('dengo-forum.login', ['angular-login.grandfather'])
.config(function ($stateProvider) {
  $stateProvider
    .state('app.login', {
      url: '/login',
      templateUrl: 'login/login.tpl.html',
      controller: 'LoginController'
    });
})
.controller('LoginController', function ($scope) {
  $scope.users = angular.fromJson(localStorage.getItem('userStorage'));
});
