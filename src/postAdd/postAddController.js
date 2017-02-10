app.controller('postAddController', function ( $scope, $state, $http) {
    $scope.viewRegion = true;
    $scope.regions = null;

    $http.get("/api/regions").then(function (answer) {
        $scope.regions = answer.data;
    });

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var m1 = date.getMonth()+1;
    var y = date.getFullYear();
    $scope.dateFormat=(y+"-"+m+"-"+d);
    $scope.dateFormat1_12=(y+"-"+m1+"-"+d);

    $scope.addPost = function () {
        if($scope.newPost.categoryPost != "general-group"){
            $scope.newPost.sity = JSON.parse($scope.newPost.sity);
        }else {
            $scope.newPost.sity = null;
        }
        $http.post("/api/post", $scope.newPost);
        $state.go('post');
    };



    // function wysiwygeditor($scope) {
    //     $scope.orightml = '<h2>Try me!</h2><p>textAngular is a super cool WYSIWYG Text Editor directive for AngularJS</p><p><b>Features:</b></p><ol><li>Automatic Seamless Two-Way-Binding</li><li>Super Easy <b>Theming</b> Options</li><li style="color: green;">Simple Editor Instance Creation</li><li>Safely Parses Html for Custom Toolbar Icons</li><li class="text-danger">Doesn&apos;t Use an iFrame</li><li>Works with Firefox, Chrome, and IE8+</li></ol><p><b>Code at GitHub:</b> <a href="https://github.com/fraywing/textAngular">Here</a> </p>';
    //     $scope.htmlcontent = $scope.orightml;
    //     $scope.disabled = false;
    // };

});