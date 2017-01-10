/**
 * Calendar controller
 *
 * @author Dima Zelenyuk
 */


app
    .controller('CalendarController', function ($scope,$state) {
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
       $scope.dateFormat=(y+"-"+m+"-"+d);


        /* event source that contains custom events on the scope */
        $scope.events =  [
            {   id: 0,
                title  : "event1",
                fullTitle: "Events-One",
                location:"пр. Свободи 10 оф.10",
                content:"content1",
                start  : "2017-01-05T14:30:00",
                end  : "2017-01-05",
                    author :{
                         name:"Ross",
                         photo:"images/src/viawEvents/images/ross.jpg",
                         phoneNumber:"+38-097-00-00-000"
                },
                comments:[
                ]
            },
            {   id: 1,
                title  : "event2",
                fullTitle: "Events-Two",
                location:"пр. Свободи 11 оф.11",
                content:"content2",
                start  : "2017-01-06",
                end  : "2017-01-06",
                    author  :{
                        name:"Dima",
                        photo:"images/src/viawEvents/images/dima.jpg",
                        phoneNumber:"+38-097-11-11-111"

                    },
                comments:[{
                    name:"Oleg",
                    photo:"images/src/viawEvents/images/oleg.jpg",
                    content:"content1",
                    data  : "2017-01-10"

                }]
            },
            {   id: 2,
                time:"15:00",
                location:"пр. Свободи 13 оф.13",
                content:"content3",
                title  : "event3",
                fullTitle: "Events-Three",
                start  : "2017-01-10",
                end  : "2017-01-10",
                    author  :{
                        name:"Oleg",
                        photo:"images/src/viawEvents/images/oleg.jpg",
                        phoneNumber:"+38-097-22-22-222"

                    },
                comments:[{
                    name:"Oleg",
                    photo:"images/src/viawEvents/images/oleg.jpg",
                    content:"content1",
                    data  : "2017-01-10"

                },{
                    name:"Dima",
                    photo:"images/src/viawEvents/images/dima.jpg",
                    content:"content2",
                    data  : "2017-01-11"
                }]

            }

        ];



        $scope.eventClick = function (calEvent) {
            $scope.commentForm = calEvent.comments;
            $scope.calEvent = calEvent;
            $scope.calEventData = calEvent.start.format('YYYY-MM-DD');
           $state.go('calendar.viawEvents');
           $state.go('calendar');
           $state.go('calendar.viawEvents');

            $scope.removeEvent = function () {
               $('#calendar').fullCalendar('removeEvents', calEvent.id);
                $state.go('calendar');
            };
            $scope.editEvent = function () {
                $state.go('calendar.editEvents');

                $scope.saveEditEvent = function () {
                        calEvent.title = $("#shortTitleEdit").val(),
                        calEvent.fullTitle = $("#fullTitleEdit").val(),
                        //calEvent.time= $("#timeEdit").val(),
                        calEvent.time = $scope.mytime.getHours("shortTime");
                        //calEvent.sity = $("#sityEdit").val(),
                        calEvent.location = $("#locationEdit").val(),
                        //calEvent.content = $("#contentEdit").val(),
                        calEvent.start = $("#startEdit").val(),
                        //calEvent.end  = $("#endEdit").val(),
                        calEvent.author.phoneNumber = $("#phoneNumberEdit").val() ;
                    $('#calendar').fullCalendar('updateEvent', calEvent);
                    $state.go('calendar');
                    console.log()

                };
            }
        };



        $scope.dayClick = function(eventDate){
            if(eventDate>date) {
                $state.go('calendar.eventsAdd');
                $state.go('calendar');
                $state.go('calendar.eventsAdd');

                $scope.eventDate = eventDate.format('YYYY-MM-DD');
                $scope.addEvent = function () {
                    if ($('#shortTitle').val() != "") {
                        $scope.obj = {
                            id: $scope.events.length,
                            title: $('#shortTitle').val(),
                            fullTitle : $('#fullTitle').val(),
                            start: $('#start').val(),
                            end: $('#end').val(),
                            time: "00:00",
                            location: $('#location').val(),
                            content: "test Content",
                            author: {
                                name: "Test",
                                photo: "images/src/viawEvents/images/dima.jpg",
                                phoneNumber: $('#phoneNumber').val()
                            },
                            comments: []
                        };
                        $scope.events.push($scope.obj);
                        $state.go('calendar');
                        $('#calendar').fullCalendar('renderEvent', $scope.obj);

                    }


                }
            }

        };
            /* config object */
        $(function() {
            $('#calendar').fullCalendar({
            header: {
                left: 'month,agendaWeek,agendaDay,today ',
                center: 'title',
                right: 'prev,next',
                lang: 'uk'
                },
                dayClick: $scope.dayClick,
                eventClick: $scope.eventClick,
                events: $scope.events

            })});



    });
