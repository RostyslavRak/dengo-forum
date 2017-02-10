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



        $scope.editDateTime = function (answer) {
            return angular.forEach(answer.data, function (event) {
                event.start = moment(event.start.year + "-" + event.start.monthValue + "-" + event.start.dayOfMonth +
                    " " + event.start.hour + ":" + event.start.minute).format("YYYY-MM-DD HH:mm");
                event.end = moment(event.end.year + "-" + event.end.monthValue + "-" + event.end.dayOfMonth +
                    " " + event.end.hour + ":" + event.end.minute).format("YYYY-MM-DD HH:mm")
            });
        };

        $http.get("/api/events").then(function (answer) {
            $scope.events = $scope.editDateTime(answer);
            $(function () {
                $('#calendarSidebar').fullCalendar({
                    eventLimit: true,
                    views: {
                        month: {
                            eventLimit: 2
                        }
                    },
                    header: {
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    },
                    height: 'auto'
                    // events: $scope.events

                })
            });
        });
        $(document).ready(function(){
            $('.dropdown-submenu a.test').on("click", function(e){
                 $(this).next('ul').toggle();
                e.stopPropagation();
                 e.preventDefault();
            });
        });

    });
