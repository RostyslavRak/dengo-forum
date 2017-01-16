/**
 * Login controller
 *
 * @author Dima Zelenyuk
 */



app
.controller('LoginController', function ($scope, $state) {
    $scope.users = angular.fromJson(localStorage.getItem('userStorage'));

    //console.log($scope.users)

});
