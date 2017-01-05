app
    .controller('SidebarController', function ($scope) {

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        /* event source that contains custom events on the scope */
        $scope.events =  [
            {   id: 1,
                title  : "event1",
                time:"13:00",
                sity:"Lviv",
                location:"пр. Свободи 10 оф.10",
                content:"content1",
                start  : "2017-01-05",
                end  : "2017-01-05",
                author :{
                    name:"Ross",
                    photo:"images/src/viawEvents/images/ross.jpg"
                },
                comments:[{
                }]
            },
            {   id: 2,
                title  : "event2",
                sity:"Kiev",
                location:"пр. Свободи 11 оф.11",
                time:"14:00",
                content:"content2",
                start  : "2017-01-06",
                end  : "2017-01-06",
                author  :{
                    name:"Dima",
                    photo:"images/src/viawEvents/images/dima.jpg"
                },
                comments:[{
                }]
            },
            {   id: 3,
                time:"15:00",
                sity:"Ivano-Frankivsk",
                location:"пр. Свободи 13 оф.13",
                content:"content3",
                title  : "event3",
                start  : "2017-01-10",
                end  : "2017-01-10",
                author  :{
                    name:"Oleg",
                    photo:"images/src/viawEvents/images/oleg.jpg"
                },
                comments:[{
                }]

            }

        ];
        $(function() {
            $('#calendarSidebar').fullCalendar({
                header: {
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                },
                events: $scope.events

            })});

        $(document).ready(function () {
            $("#tree").jstree({
                "plugins": ["wholerow"]
            });
        });

    });
