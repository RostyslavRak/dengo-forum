/**
 * Home controller
 *
 * @author Dima Zelenyuk
 */



angular.module('dengo-forum.login', ['dengo-forum.routing'])
.controller('LoginController', function ($scope) {
  $scope.users = angular.fromJson(localStorage.getItem('userStorage'));



});
