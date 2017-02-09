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
      //photo: "build/images/src/register/images/no_image1.png"
  };


    $http.get("/api/regions").then(function (answer) {
        $scope.regions = answer.data;
    });


    $scope.submit = function (formInstance) {
    // xhr is departing
    //     console.log($scope.registerObj)
    $scope.xhr = true;
    // $scope.registerObj.city = JSON.parse($scope.registerObj.city);
        console.log($scope.registerObj);
        $http.post("/api/permit/all/token/send" , $scope.registerObj).success(function(answer){
          $scope.xhr = false;
            $scope.redirect = true;
      }).error(function () {
          $scope.xhr = false;
      });

    // $http.post('/user', $scope.registerObj)
    // .success(function (data, status, headers, config) {
    //   console.info('post success - ', data);
    //   $scope.xhr = false;
    //   $scope.redirect = true;
    //   $timeout(function () {
    //     $state.go('login');
    //   }, 2000);
    // })
    // .error(function (data, status, headers, config) {
    //   data.errors.forEach(function (error, index, array) {
    //     formInstance[error.field].$error[error.name] = true;
    //   });
    //   formInstance.$setPristine();
    //   console.info('post error - ', data);
    //   $scope.xhr = false;
    // });
  };
});
