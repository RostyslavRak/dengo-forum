app.controller('postAddController', function ( $scope, $state) {
    $scope.viewRegion = true;

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var m1 = date.getMonth()+1;
    var y = date.getFullYear();
    $scope.dateFormat=(y+"-"+m+"-"+d);
    $scope.dateFormat1_12=(y+"-"+m1+"-"+d);

    $('.selectpicker').selectpicker({
        size: 8
    });



    $scope.newPost = {
        name:$scope.ls.user.name,
        photo:$scope.ls.user.photo,
        data  : $scope.dateFormat1_12,
        likes:[
        ],
        comments:[
        ]
    };

    $scope.addPost = function () {
       // $scope.addPosts.push($scope.newPost);
        $state.go('post');
        console.log( $scope.newPost);
    };


});