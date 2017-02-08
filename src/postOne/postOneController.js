/**
 * PostOne Controller
 *
 * @author Dima Zelenyuk
 */


app
    .controller('PostOneController', function ($scope,$rootScope, $http, $stateParams) {
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;


        $http.get("/api/post/" + $stateParams.postId).then(function (data) {
            $scope.post = data.data;
            console.log($scope.post)
        });

        console.log($stateParams)

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

        // adding like to post
        $scope.addLikes = function () {
            $http.post('/api/like/post', {userId: $rootScope.user.id, postId: $stateParams.postId}).then(function (answer) {
                $scope.post = answer.data;

                //console.log(answer.data.likes)
                // if(){
                //     $("#addLikes").addClass("colorLikesTrue");
                // }
                // if(){
                //     $("#addLikes").removeClass("colorLikesTrue");
                // }

            })
        };

    });
