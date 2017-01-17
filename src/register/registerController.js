/**
 *Registration
 *
 * @author Dima Zelenyuk
 */


app
.controller('RegisterController', function ($scope, $http, $timeout, $state) {
    // $scope.users = angular.fromJson(localStorage.getItem('userStorage'));
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var m1 = date.getMonth()+1;
    var y = date.getFullYear();
    $scope.dateFormat=(y+"-"+m+"-"+d);
    $scope.dateFormat1_12=(y+"-"+m1+"-"+d);

    $scope.xhr = false;
  $scope.redirect = false;
  $scope.registerObj = {
    dataRegistration: $scope.dateFormat1_12,
    role: 'user',
    photo:"images/src/register/images/no_image1.png"
  };

  $scope.submit = function (formInstance) {
    // xhr is departing
    $scope.xhr = true;
    $http.post('/user', $scope.registerObj)
    .success(function (data, status, headers, config) {
      console.info('post success - ', data);
      $scope.xhr = false;
      $scope.redirect = true;
      $timeout(function () {
        $state.go('login');
      }, 2000);
    })
    .error(function (data, status, headers, config) {
      data.errors.forEach(function (error, index, array) {
        formInstance[error.field].$error[error.name] = true;
      });
      formInstance.$setPristine();
      console.info('post error - ', data);
      $scope.xhr = false;
    });
  };
});
