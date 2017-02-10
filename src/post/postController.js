app
    .controller('PostController', function ( $state, $http, $scope, $stateParams) {


        if($stateParams.regionId != null){
            $http.get("/api/post/region/" + $stateParams.regionId).then(function (data) {
                $scope.posts = data.data;
            });
        }else {
            $http.get("/api/posts").then(function (data) {
                $scope.posts = data.data;
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



        // $scope.search = null;
        // $scope.$watch("search", function (data) {
        //     if(data === "" || $scope.search === null){
        //         $http.get("/api/posts").then(function (data) {
        //             $scope.posts = data.data;
        //         });
        //     }
        //    $http.get("/api/post/title/" + data ).then(function (answer) {
        //        $scope.posts = answer.data;
        //    })
        // });



    });



