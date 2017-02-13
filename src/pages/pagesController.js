/**
 * Page route
 *
 * @author Dima Zelenyuk
 */




app
    .controller('PagesController', function ($scope, $http) {
        $scope.superAdmin = false;

        $http.get("/api/user/my").then(function (answer) {
            $scope.admin = answer.data;
            angular.forEach(answer.data.authorities, function (role) {
               if(role.authority == "SUPER_ADMIN"){
                   $scope.superAdmin = true;
               }
           })
        });
        $http.get("/api/regions").then(function (answer) {
            $scope.regions = answer.data;
        });

        $scope.send = function (unp) {
          $http.get(unp.url).then(function (answer) {
              $scope.admin = answer.data;
          })
        };

        $scope.remove = function (unp) {
            $http.get(unp.url.replace("continue", 'remove')).then(function (answer) {
                $scope.admin = answer.data;
            })
        };
        $(".dropdown dt a").on('click', function() {
            $(".dropdown dd ul").slideToggle('fast');
        });

        $(".dropdown dd ul li a").on('click', function() {
            $(".dropdown dd ul").hide();
        });

        function getSelectedValue(id) {
            return $("#" + id).find("dt a span.value").html();
        }

        $(document).bind('click', function(e) {
            var $clicked = $(e.target);
            if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
        });

        $('.mutliSelect input[type="checkbox"]').on('click', function() {

            var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
                title = $(this).val() + ",";

            if ($(this).is(':checked')) {
                var html = '<span title="' + title + '">' + title + '</span>';
                $('.multiSel').append(html);
                $(".hida").hide();
            } else {
                $('span[title="' + title + '"]').remove();
                var ret = $(".hida");
                $('.dropdown dt a').append(ret);

            }
            $scope.addPost = function () {
                if($scope.newPost.categoryPost != "general-group"){
                    $scope.newPost.sity = JSON.parse($scope.newPost.sity);
                }else {
                    $scope.newPost.sity = null;
                }
                $http.post("/api/post", $scope.newPost);
                $state.go('post');
            };
            // $("#form_input_city").scroll(function(){
            // });
        });
        // $scope.userObj = [
        //     {
        //         id:1,
        //         name:"Dima",
        //         lastName:"Zelenyuk",
        //         photo:"images/src/viewEvents/images/dima.jpg",
        //         role:"User",
        //         dateRegistered:"2017-01-12"
        //     },
        //     {
        //         id:2,
        //         name:"Andrey",
        //         lastName:"Blizniuk",
        //         photo:"images/src/viewEvents/images/dima.jpg",
        //         role:"Admin",
        //         dateRegistered:"2017-01-22"
        //     }
        // ];


    });

