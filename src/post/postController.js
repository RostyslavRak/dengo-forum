app
    .controller('PostController', function ($rootScope, $state, $http, $scope, $stateParams) {
        console.log($stateParams);

        if($stateParams.regionId != null){
            $http.get("/api/post/region/" + $stateParams.regionId).then(function (data) {
                $rootScope.posts = data.data;
                console.log (data.data)
            });
        }else {
            $http.get("/api/posts").then(function (data) {
                $rootScope.posts = data.data;
                console.log (data.data)
            });
        }

        $scope.goPost = function (postId) {
            $state.go("postone", {"postId": postId});
        };

        // $scope.countLike = function (countLike) {
        //     countLike.like += 1;
        //     $http.countLike("/api/post", $scope.newPost);
        // };
        //


        $scope.search = null;
        $scope.$watch("search", function (data) {
           console.log(data)
        });



    });



