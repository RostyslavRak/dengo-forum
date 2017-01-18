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
        var m1 = date.getMonth()+1;
        var y = date.getFullYear();
       $scope.dateFormat=(y+"-"+m+"-"+d);
       $scope.dateFormat1_12=(y+"-"+m1+"-"+d);
        /* event source that contains custom events on the scope */



        $scope.events =  [
            {   id: 0,
                title  : "event1",
                fullTitle: "Events-One",
                address:"Львів пр. Свободи 10 оф.10",
                htmlContent:"<h2>content1</h2>",
                start  : "2017-01-05 22:30",
                end  : "2017-01-05 23:30",
                    author :{
                         name:"Ross",
                         photo:"images/src/viawEvents/images/ross.jpg",
                         phoneNumber:"+38-097-00-00-000"
                },
                peopleGo:[
                    {
                    name:"Ross",
                    photo:"images/src/viawEvents/images/ross.jpg"
                },
                    {
                        name:"Dima",
                        photo:"images/src/viawEvents/images/dima.jpg"
                    }
                ],

                comments:[
                ]
            },
            {   id: 1,
                title  : "event2",
                fullTitle: "Events-Two",
                address:"пр. Свободи 11 оф.11",
                htmlContent:"content2",
                start  : "2017-01-06 20:30",
                end  : "2017-01-06 21:30",
                    author  :{
                        name:"Dima",
                        photo:"images/src/viawEvents/images/dima.jpg",
                        phoneNumber:"+38-097-11-11-111"

                    },
                peopleGo:[],
                comments:[{
                    name:"Oleg",
                    photo:"images/src/viawEvents/images/oleg.jpg",
                    content:"content1",
                    data  : "2017-01-10"

                }]
            },
            {   id: 2,
                time:"15:00",
                address:"пр. Свободи 13 оф.13",
                htmlContent:"content3",
                title  : "event3",
                fullTitle: "Events-Three",
                start  : "2017-01-10 12:30",
                end  : "2017-01-10 13:00",
                    author  :{
                        name:"Oleg",
                        photo:"images/src/viawEvents/images/oleg.jpg",
                        phoneNumber:"+38-097-22-22-222"

                    },
                peopleGo:[],
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
            $scope.calEventData = calEvent.start.format('YYYY-MM-DD HH:mm');
           $state.go('calendar.viawEvents');
           $state.go('calendar');
           $state.go('calendar.viawEvents');

            $scope.removeEvent = function () {
               $('#calendar').fullCalendar('removeEvents', calEvent.id);
                $state.go('calendar');
            };
            $scope.editEvent = function () {
                calEvent.start = calEvent.start.format('YYYY-MM-DD HH:mm');
                calEvent.end = calEvent.end.format('YYYY-MM-DD HH:mm');
                $state.go('calendar.editEvents');
                $scope.saveEditEvent = function () {
                    $('#calendar').fullCalendar('updateEvent', calEvent);
                    $state.go('calendar');
                    console.log(calEvent.start );
                };
            };
            $scope.iGoEvent = function () {
                $scope.newIgoOnEvent = {
                    id: "user id",
                    name: $scope.ls.user.name ,
                    photo:$scope.ls.user.photo
                };
                angular.forEach($scope.events, function (event) {
                    if(event.id == calEvent.id){
                     event.peopleGo.push($scope.newIgoOnEvent);
                    }
                });
                console.log( $scope.newIgoOnEvent);
            };



            $scope.addCommentEvent = function () {
                $scope.newCommentEvent = {
                    name:$scope.ls.user.name,
                    photo:$scope.ls.user.photo,
                    content: $('#commentEvent').val(),
                    data  : $scope.dateFormat1_12
                };

                angular.forEach($scope.events, function (event) {
                    if(event.id == calEvent.id){
                        event.comments.push($scope.newCommentEvent);
                    }
                });
                 $('#commentEvent').val("");
                //$state.go('viawEvents');
                $('#event-comment').removeClass("in");
                console.log( $scope.newCommentEvent);
            };

        };

        $scope.dayClick = function(eventDate){
            if(eventDate>date) {
                $state.go('calendar.eventsAdd');
                $state.go('calendar');
                $state.go('calendar.eventsAdd');

                $scope.newEvent = {
                      id: $scope.events.length,
                    author: {
                        name: $scope.ls.user.name,
                        photo: $scope.ls.user.photo
                    },
                    comments: [],
                    peopleGo: []
                };

                $scope.addEvent = function () {
                        $scope.events.push($scope.newEvent);
                        $state.go('calendar');
                        $('#calendar').fullCalendar('renderEvent', $scope.newEvent);
                        console.log( $scope.newEvent);
                    }
                }

        };
            /* config object */
        var initialLocaleCode = 'en';
        $(function() {
            $('#calendar').fullCalendar({
            header: {
                left: 'month,agendaWeek,agendaDay,today ',
                center: 'title',
                right: 'prev,next',
                locale: initialLocaleCode
                },
                dayClick: $scope.dayClick,
                eventClick: $scope.eventClick,
                events: $scope.events

            });
            $.each($.fullCalendar.locales, function(localeCode) {
                $('#locale-selector').append(
                    $('<option/>')
                        .attr('value', localeCode)
                        .prop('selected', localeCode)
                        .text(localeCode)
                );
            });

            // when the selected option changes, dynamically change the calendar option
            $('#locale-selector').on('change', function() {
                if (this.value) {
                    $('#calendar').fullCalendar('option', 'locale', this.value);
                }
            })
        });
    });
