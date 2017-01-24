/**
 * PostOne Controller
 *
 * @author Dima Zelenyuk
 */


app
    .controller('PostOneController', function ($scope,$rootScope) {
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;

        $scope.commentsPost = $rootScope.posts[0].comments;
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var m1 = date.getMonth()+1;
        var y = date.getFullYear();
        $scope.dateFormat=(y+"-"+m+"-"+d);
        $scope.dateFormat1_12=(y+"-"+m1+"-"+d);


        $scope.newCommentPost = {
            name:$scope.ls.user.name,
            photo:$scope.ls.user.photo,
            data  : $scope.dateFormat1_12,
            likes:[
            ]

        };

        $scope.addCommentPost = function () {
            $scope.commentsPost.push($scope.newCommentPost);
            $('#commentPost').val("");
            console.log( $scope.newCommentPost);
        };


    });
