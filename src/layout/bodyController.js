app
    .controller('BodyController', function ($scope, $state, $stateParams, loginService, $http, $timeout, $rootScope, $cookies) {
        $scope.$state = $state;
        $scope.loginError = false;
        $scope.$stateParams = $stateParams;
        $scope.ls = loginService;
        $scope.login = {
            username: "",
            password: ""
        };


        $scope.loginMe = function () {
            var loginPromise = $http.post("/api/auth", $scope.login,  {headers: {'RememberMe': 'true'}});
            $scope.login.working = true;
            $scope.login.wrong = false;
            loginService.loginUser(loginPromise);
            loginPromise.success(function () {
                loginService.isLogged = true;
                $http.get("/api/user/my").then(function (answer) {
                    $rootScope.user = answer.data;
                });
                $state.go("user")
            });

            loginPromise.error(function () {
                $scope.loginError = true;
                $scope.login.wrong = true;
                $timeout(function () { $scope.login.wrong = false; }, 8000);
            });
            loginPromise.finally(function () {
                $scope.login.working = false;
            });
        };

        $scope.logoutMe = function () {
            loginService.isLogged = false;
            loginService.logoutUser();
        };



        // $scope.loginMe = function () {
        //
        //   var loginPromise = $http.post('/login', $scope.login);
        //     $scope.login.working = true;
        //     $scope.login.wrong = false;
        //     loginService.loginUser(loginPromise);
        //     loginPromise.success(function () {
        //         $state.go("user")
        //     });
        //     loginPromise.error(function () {
        //         $scope.loginError = true;
        //         $scope.login.wrong = true;
        //         $timeout(function () { $scope.login.wrong = false; }, 8000);
        //     });
        //     loginPromise.finally(function () {
        //         $scope.login.working = false;
        //     });
        // };
        //
        // $scope.logoutMe = function () {
        //     loginService.logoutUser($http.get('/logout'));
        // };


    });
