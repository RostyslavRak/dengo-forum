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

            // $.post("http://192.168.0.222:8090/api/auth", {headers: {"Content-Type": "application/json"}}, {password: "user", username: "user@gmail.com"})

            // $http.post("http://192.168.0.222:8090/api/auth", {password: "user", username: "user@gmail.com"}, {headers: {"Content-Type": "application/json", 'RememberMe': 'true', 'ReCaptcha': null}}).then(function (data) {
            //     console.log(data)
            // });
          var loginPromise = $http.post('/login', $scope.login);
            $scope.login.working = true;
            $scope.login.wrong = false;
            loginService.loginUser(loginPromise);
            loginPromise.success(function () {
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


    });
