app
    .controller('ProfileController', function ($scope,$rootScope) {
       // $scope.users = angular.fromJson(localStorage.getItem('userStorage'));
        //console.log($scope.ls.user)
       // console.log($rootScope.userTrue)

        $scope.profile = true;
        $scope.sendEmail = function(email, subject, body){
            var link = "mailto:"+ email
                + "&subject=New email " + escape(subject);
            + "&body=" + escape(body);

            window.location.href = link;
        };


        $scope.profileEdit = function () {
            $scope.profile = false;
        };

        $scope.saveProfileEdit = function () {
            $scope.profile = true;
        }

    });
