/**
 * Calendar controller
 *
 * @author Dima Zelenyuk
 */


app
    .controller('CalendarController', function ($scope,$state,$http) {
        $scope.events = null;


        $http.get("/api/events").then(function (answer) {
            $scope.events = angular.forEach(answer.data, function (event) {
                event.start =  moment(event.start.year + "-" + event.start.monthValue + "-" + event.start.dayOfMonth +
                    " " + event.start.hour + ":" + event.start.minute).format("YYYY-MM-DD HH:mm");
                event.end = moment(event.end.year + "-" + event.end.monthValue + "-" + event.end.dayOfMonth +
                    " " + event.end.hour + ":" + event.end.minute).format("YYYY-MM-DD HH:mm")
            });
            console.log($scope.events)
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

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var m1 = date.getMonth()+1;
        var y = date.getFullYear();
        $scope.dateFormat=(y+"-"+m+"-"+d);
        $scope.dateFormat1_12=(y+"-"+m1+"-"+d);
        $scope.iGoEventStatus = false;

        // $scope.events =  [
        //     {   id: 0,
        //         title  : "event1",
        //         fullTitle: "Events-One",
        //         address:"Івано-Фраківська мазепи 10",
        //         htmlContent:"<h2>content1</h2>",
        //         start  : "2017-01-05 22:30",
        //         end  : "2017-01-05 23:30",
        //         phoneNumber:"380970000000",
        //             author :{
        //                  name:"Ross",
        //                  photo:"images/src/viewEvents/images/ross.jpg"
        //
        //         },
        //         peopleGo:[
        //             {
        //             id:1,
        //             name:"Ross",
        //             photo:"images/src/viewEvents/images/ross.jpg"
        //         },
        //             {   id:2,
        //                 name:"Dima",
        //                 photo:"images/src/viewEvents/images/dima.jpg"
        //             }
        //         ],
        //
        //         comments:[
        //         ]
        //     },
        //     {   id: 1,
        //         title  : "event2",
        //         fullTitle: "Events-Two",
        //         address:"пр. Свободи 11 оф.11",
        //         htmlContent:"content2",
        //         start  : "2017-01-06 20:30",
        //         end  : "2017-01-06 21:30",
        //         phoneNumber:"+380971111111",
        //             author  :{
        //                 name:"Dima",
        //                 photo:"images/src/viewEvents/images/dima.jpg"
        //
        //
        //             },
        //         peopleGo:[],
        //         comments:[{
        //             name:"Oleg",
        //             photo:"images/src/viewEvents/images/oleg.jpg",
        //             content:"content1",
        //             data  : "2017-01-10"
        //
        //         }]
        //     },
        //     {   id: 2,
        //         time:"15:00",
        //         address:"пр. Свободи 13 оф.13",
        //         htmlContent:"content3",
        //         title  : "event3",
        //         fullTitle: "Events-Three",
        //         start  : "2017-01-10 12:30",
        //         end  : "2017-01-10 13:00",
        //         phoneNumber:"+380972222222",
        //             author  :{
        //                 name:"Oleg",
        //                 photo:"images/src/viewEvents/images/oleg.jpg"
        //
        //
        //             },
        //         peopleGo:[],
        //         comments:[{
        //             name:"Oleg",
        //             photo:"images/src/viewEvents/images/oleg.jpg",
        //             content:"content1",
        //             data  : "2017-01-10"
        //
        //         },{
        //             name:"Dima",
        //             photo:"images/src/viewEvents/images/dima.jpg",
        //             content:"content2",
        //             data  : "2017-01-11"
        //         }]
        //
        //     }
        //
        // ];

        $scope.eventClick = function (calEvent) {
            $scope.commentForm = calEvent.comments;
            $scope.calEvent = calEvent;
            $state.go('calendar.viewEvents');
           $state.go('calendar');
           $state.go('calendar.viewEvents');

            $scope.removeEvent = function () {
               $('#calendar').fullCalendar('removeEvents', calEvent.id);
                $state.go('calendar');
            };
            $scope.editEvent = function () {
                 $scope.calEvent.start  =  $scope.calEvent.start._i;
                 $scope.calEvent.end = $scope.calEvent.end._i;
                $state.go('calendar.editEvents');
                $scope.saveEditEvent = function () {
                    $('#calendar').fullCalendar('updateEvent', calEvent);
                    $state.go('calendar');
                };
                $scope.cancelEventEdit = function () {
                    $('#calendar').fullCalendar('updateEvent', calEvent);
                    $state.go('calendar');
                }
            };
            $scope.iGoEvent = function () {
                angular.forEach($scope.events, function (event) {
                  var peopleIgoId = event.peopleGo.length+1;
                    if(event.id == calEvent.id){
                          $scope.newIgoOnEvent = {
                          id: peopleIgoId,
                          name: $scope.ls.user.name ,
                          photo:$scope.ls.user.photo
                    };
                     event.peopleGo.push($scope.newIgoOnEvent);
                    }
                });
                $scope.iGoEventStatus = true;
                console.log( $scope.newIgoOnEvent);
            };

            $scope.iDontGoEvent = function () {
                angular.forEach($scope.events, function (event) {
                    if(event.peopleGo == calEvent.peopleGo){
                        if(event.peopleGo == calEvent.peopleGo){
                            console.log( event.peopleGo[event.peopleGo.length-1]);
                            calEvent.peopleGo.splice( event.peopleGo[event.peopleGo.length-1],1);
                        }
                    }
                });
                $scope.iGoEventStatus = false;
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
                //$state.go('viewEvents');
                $('#event-comment').removeClass("in");
                console.log( $scope.newCommentEvent);
            };

        };

        $scope.dayClick = function(eventDate){
            // if(eventDate>date) {}
                $state.go('calendar.eventsAdd');
                $state.go('calendar');
                $state.go('calendar.eventsAdd');


        };

        $('.dropdown-submenu a.test').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    });
