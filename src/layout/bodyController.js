app
    .controller('BodyController', function ($scope, $state, $stateParams, loginService, $http, $timeout,$rootScope) {
        $scope.$state = $state;
        $scope.loginError = false;
        $scope.$stateParams = $stateParams;
        $scope.ls = loginService;
        $scope.login = {
            working: false,
            wrong: false
        };


        $scope.loginMe = function () {
            var loginPromise = $http.post("http://192.168.0.222:8090/api/auth", $scope.login);
            $scope.login.working = true;
            $scope.login.wrong = false;
            loginService.loginUser(loginPromise);
            loginPromise.success(function () {
                $cookies.put("JJWT", loginPromise.$$state.value.data.JJWT);
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
            loginService.logoutUser($http.get('/logout'));
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
