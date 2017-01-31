app
    .controller('SidebarController', function ($scope, $http) {

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
        $http.get("/api/top/post").then(function (data) {
            $scope.topPosts = data.data;
        });

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
