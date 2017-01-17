app
    .controller('SidebarController', function ($scope) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();


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

        $(document).ready(function () {
            $("#tree").jstree({
                "plugins": ["wholerow"]
            });
        });

    });
