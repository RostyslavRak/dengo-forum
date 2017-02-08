/**
 * Page route
 *
 * @author Dima Zelenyuk
 */




app
    .controller('PagesController', function ($scope, $http) {
        $scope.superAdmin = false;

        $http.get("/api/user/my").then(function (answer) {
            $scope.admin = answer.data;
            angular.forEach(answer.data.authorities, function (role) {
               if(role.authority == "SUPER_ADMIN"){
                   $scope.superAdmin = true;
               }
           })
        });

        $scope.send = function (unp) {
          $http.get(unp.url).then(function (answer) {
              $scope.admin = answer.data;
          })
        };

        $scope.remove = function (unp) {
            $http.get(unp.url.replace("continue", 'remove')).then(function (answer) {
                $scope.admin = answer.data;
            })
        };

        // $scope.userObj = [
        //     {
        //         id:1,
        //         name:"Dima",
        //         lastName:"Zelenyuk",
        //         photo:"images/src/viewEvents/images/dima.jpg",
        //         role:"User",
        //         dateRegistered:"2017-01-12"
        //     },
        //     {
        //         id:2,
        //         name:"Andrey",
        //         lastName:"Blizniuk",
        //         photo:"images/src/viewEvents/images/dima.jpg",
        //         role:"Admin",
        //         dateRegistered:"2017-01-22"
        //     }
        // ];


    });

