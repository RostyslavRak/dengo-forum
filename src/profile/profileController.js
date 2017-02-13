app
    .controller('ProfileController', function ($scope,loginService,$http, $stateParams, $state,$rootScope) {
        $scope.ls = loginService;
        $scope.user = null;
        $scope.profile = true;
        $scope.post = null;
        $scope.invitation = {
            email: ""
        };
        $scope.editUser = {
        };
        $scope.editUserPassword = {
            password: null
        };

        $http.get("/api/regions").then(function (data) {
            $scope.regions = data.data;
        });
        if($stateParams.nickName == ""){
            $http.get("/api/user/my").then(function (answer) {
                $scope.user = answer.data;
                console.log( $scope.user);
                $http.get('/api/posts/' +$scope.user.id).then(function (data) {
                    $scope.posts = data.data;
                });
            });
        }else {
            $http.get("/api/user/nick/" + $stateParams.nickName).then(function (answer) {
                $scope.user = answer.data;
                $http.get('/api/posts/nick/' + $stateParams.nickName).then(function (data) {
                    $scope.posts = data.data;
                });
            });
        }

        $scope.goPost = function (postId) {
            $state.go("postone", {"postId": postId});
        };

        $scope.goToPost = function (regionId) {
            $state.go("post", {"regionId": regionId})
        };


        var img = document.getElementById('img');
        function handleFileSelect(evt) {
            var file = evt.target.files[0];
            img.src = window.URL.createObjectURL(file);
        }
        document.getElementById('filePhoto').addEventListener('change', handleFileSelect, false);

        function performClick(node) {
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, false);
            node.dispatchEvent(evt);
        }

        $scope.addAvatarPhoto = function() {
            performClick(document.getElementById('filePhoto'));
        };

        $scope.deleteAvatarPhoto = function () {
            $scope.user.photo = "images/src/register/images/no_image1.png";
        };



        $scope.deleteAvatarPhoto = function () {
            $scope.file = null;
            $scope.user.photo = null;
            $http.delete("/api/image/delete/");
        };

        $scope.$watch('file', function (data) {
            if(data != undefined){
                $scope.ls.uploadImage(data).then(function (data) {
                    $scope.user = data;
                });
            }
        });


        $scope.profileEdit = function () {
            // console.log( )
            $scope.profile = false;
        };
        $scope.saveProfileEdit = function () {
            $scope.editUser.id = $scope.user.id;
            $scope.editUser.name = $scope.user.name;
            $scope.editUser.company = $scope.user.company;
            $scope.editUser.companySite = $scope.user.companySite;
            $scope.editUser.city = $scope.user.city.region;
            $scope.editUser.subscriptionToNewsletter = $scope.user.subscriptionToNewsletter;
            $scope.editUser.subscriptionToResponseNotification = $scope.user.subscriptionToResponseNotification;
            $scope.editUser.subscriptionToLikeNotification = $scope.user.subscriptionToLikeNotification;
            $scope.editUser.subscriptionToEventsNotification = $scope.user.subscriptionToEventsNotification;
            $rootScope.$emit('myProfile', $scope.user);
            $http.post("/api/user/update", $scope.editUser).then(function (answer) {
                console.log(answer.data);
            });
            $scope.profile = true;
            $scope.user.photo = img.src;
        };

        $scope.cancelProfileEdit = function () {
            $scope.profile = true;
        };






        $scope.sendInvitation = function () {
            $('.sendInvitation1').removeClass('display', 'none');
            $('.sendInvitation1').css('display', 'block');
        };
        $scope.closeSendInvitationToEmail
            = function () {
            $('.sendInvitation1').removeClass('display', 'block');
            $('.sendInvitation1').css('display', 'none');
        };
               $scope.sendInvitationToEmail = function () {
            $('.sendInvitation1').removeClass('display', 'block');
            $('.sendInvitation1').css('display', 'none');
          $http.post("/api/send/invitation", $scope.invitation).then(function (answer) {
          })
        };

        $scope.changePassword = function () {
            $('.changePassword1').removeClass('display', 'none');
            $('.changePassword1').css('display', 'block');
        };
        $scope.closeChangePassword1 = function () {
            $('.changePassword1').removeClass('display', 'block');
            $('.changePassword1').css('display', 'none');
        };


        $scope.sendNewPassword = function () {
            $scope.editUserPassword.id = $scope.user.id;
            $('.changePassword1').removeClass('display', 'block');
            $('.changePassword1').css('display', 'none');
            $http.post("/api/user/update/password",  $scope.editUserPassword).then(function (answer) {
           })

};

        // $http.get("/api/post/" + $stateParams.postId + $rootScope.user.id.then(function (data) {
        //     $scope.post = data.data;
        //     console.log($scope.post)
        // });



 });

