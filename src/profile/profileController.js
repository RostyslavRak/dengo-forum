app
    .controller('ProfileController', function ($scope,loginService,$http, $stateParams) {
       $scope.ls = loginService;
        $scope.user = null;
        $scope.profile = true;
        if($stateParams.nickName == ""){
            $http.get("/api/user/my").then(function (answer) {
                $scope.user = answer.data;
                console.log($scope.user)
            });
        }else {
            $http.get("/api/user/nick/" + $stateParams.nickName).then(function (answer) {
                $scope.user = answer.data;
            });
        }
        $http.get("/api/posts" + $stateParams.regionId).then(function (data) {
            $rootScope.posts = data.data;
            console.log (data.data)
        });


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
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].photo = $scope.ls.user.photo;
            console.log($scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")]);
            localStorage.setItem('userStorage', angular.toJson($scope.users));
        };
        $scope.saveProfileEdit = function () {
            $scope.profile = true;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].name =  $scope.ls.user.name;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].city =  $scope.ls.user.city;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].company =  $scope.ls.user.company;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].companySite =  $scope.ls.user.companySite;
            $scope.ls.user.photo = img.src;
            localStorage.setItem('userStorage', angular.toJson($scope.users));
        };

        // $http.get("/api/post/" + $stateParams.postId + $rootScope.user.id.then(function (data) {
        //     $scope.post = data.data;
        //     console.log($scope.post)
        // });

        $scope.sendComment = function () {
            $http.post("/api/add/comment/post/" + $stateParams.postId, $scope.newCommentPost).then(function (data) {
                $scope.post = data.data;
                $('#commentPost').val("");
                console.log (data.data)
            });
        };

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var m1 = date.getMonth()+1;
        var y = date.getFullYear();
        $scope.dateFormat=(y+"-"+m+"-"+d);
        $scope.dateFormat1_12=(y+"-"+m1+"-"+d);


        $scope.newCommentPost = {
        };

        $scope.addCommentPost = function () {
            $scope.commentsPost.push($scope.newCommentPost);
        };

        // adding like to post
        $scope.addLikes = function () {
            $http.post('/api/like/post', {userId: $rootScope.user.id, postId: $stateParams.postId}).then(function (answer) {
                $scope.post = answer.data;
            })
        };




    });
