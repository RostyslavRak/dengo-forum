app
    .controller('SidebarController', function ($scope, $http, $state) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        $scope.regions = null;
        $scope.topAuthors = null;
        $scope.topPosts = null;

        $http.get("/api/regions").then(function (data) {
            $scope.regions = data.data;
        });
        $http.get("/api/top/author").then(function (data) {
            $scope.topAuthors = data.data;
        });
        $http.get("/api/top/active/members").then(function (data) {
            $scope.topActiveMembers = data.data;
        });

        $scope.goToPost = function (regionId) {
            $state.go("post", {"regionId": regionId})
        };

        $(function() {
            $('#calendarSidebar').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                height: 'auto',
                events: $scope.events

            })});

        $(document).ready(function(){
            $('.dropdown-submenu a.test').on("click", function(e){
                 $(this).next('ul').toggle();
                e.stopPropagation();
                 e.preventDefault();
            });
        });

    });
