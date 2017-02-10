app
    .controller('ProfileController', function ($scope,loginService,$http, $stateParams, $state) {
        $scope.ls = loginService;
        $scope.user = null;
        $scope.profile = true;
        $scope.post = null;
        $scope.invitation = {
            email: ""
        };
        $http.get("/api/regions").then(function (data) {
            $scope.regions = data.data;
        });
        if($stateParams.nickName == ""){
            $http.get("/api/user/my").then(function (answer) {
                $scope.user = answer.data;
                console.log( $scope.user)
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



        $scope.profileEdit = function () {
            $scope.profile = false;
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
        $scope.saveProfileEdit = function () {
            $scope.editUserObj = {
                company: $scope.user.company,
                companySite: $scope.user.companySite,
                htmlContent: calEvent.htmlContent
            };
            console.log($scope.editUserObj);
            $http.post("/api/event/update", $scope.editEventObj).then(function (answer) {
                $scope.events.push(answer.data);
                console.log(answer.data);
            });
            $scope.profile = true;
            $scope.user.photo = img.src;
        };






        $scope.sendInvitation = function () {
            $('.sendInvitation1').removeClass('display', 'none');
            $('.sendInvitation1').css('display', 'block');
        };
               $scope.sendInvitationToEmail = function () {
            $('.sendInvitation1').removeClass('display', 'block');
            $('.sendInvitation1').css('display', 'none');
          $http.post("/api/send/invitation", $scope.invitation).then(function (answer) {
          })
        };

        // $http.get("/api/post/" + $stateParams.postId + $rootScope.user.id.then(function (data) {
        //     $scope.post = data.data;
        //     console.log($scope.post)
        // });



 });

