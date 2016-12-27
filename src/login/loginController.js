/**
 * Home controller
 *
 * @author Dima Zelenyuk
 */



app
.controller('LoginController', function ($scope) {
  $scope.users = angular.fromJson(localStorage.getItem('userStorage'));



});
