/**
 * Calendar controller
 *
 * @author Dima Zelenyuk
 */


app
    .controller('CalendarController', function ($scope, $state, $http) {
        $scope.events = null;

        $http.get("/api/regions").then(function (data) {
            $scope.regions = data.data;
        });

        $scope.selectEventByRegion = function (regionId) {
            $http.get("/api/events/region/" + regionId).then(function (answer) {
                $scope.events = $scope.editDateTime(answer);
            });
        };

        $scope.editDateTime = function (answer) {
            return angular.forEach(answer.data, function (event) {
                event.start = moment(event.start.year + "-" + event.start.monthValue + "-" + event.start.dayOfMonth +
                    " " + event.start.hour + ":" + event.start.minute).format("YYYY-MM-DD HH:mm");
                event.end = moment(event.end.year + "-" + event.end.monthValue + "-" + event.end.dayOfMonth +
                    " " + event.end.hour + ":" + event.end.minute).format("YYYY-MM-DD HH:mm")
            });
        };

        $scope.loadEvent = function () {
            $http.get("/api/events").then(function (answer) {
                $scope.events = $scope.editDateTime(answer);

                var initialLocaleCode = 'en';
                $(function () {
                    $('#calendar').fullCalendar({
                        eventLimit: true,
                        views: {
                            month: {
                                eventLimit: 4
                            }
                        },
                        header: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'month,agendaWeek,agendaDay,listWeek',
                            locale: initialLocaleCode
                        },
                        dayClick: $scope.dayClick,
                        eventClick: $scope.eventClick,
                        events: $scope.events


                    });
                    $.each($.fullCalendar.locales, function (localeCode) {
                        $('#locale-selector').append(
                            $('<option/>')
                                .attr('value', localeCode)
                                .prop('selected', localeCode)
                                .text(localeCode)
                        );
                    });

                    // when the selected option changes, dynamically change the calendar option
                    $('#locale-selector').on('change', function () {
                        if (this.value) {
                            $('#calendar').fullCalendar('option', 'locale', this.value);
                        }
                    })
                });
            });
        };

        $scope.loadEvent();

        // $scope.$on("updateEventCalendar", function () {
        //     $('#calendar').fullCalendar('updateEvents', $scope.events );
        // });

        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var m1 = date.getMonth() + 1;
        var y = date.getFullYear();
        $scope.dateFormat = (y + "-" + m + "-" + d);
        $scope.dateFormat1_12 = (y + "-" + m1 + "-" + d);
        $scope.iGoEventStatus = false;

        $scope.eventClick = function (calEvent) {
             console.log(calEvent);
            $scope.commentForm = calEvent.comments;
            $scope.calEvent = calEvent;
            $state.go('calendar.viewEvents');
            $state.go('calendar');
            $state.go('calendar.viewEvents');

            $scope.removeEvent = function () {
                $http.get("/api/remove/event/"+calEvent.id).then(function (answer) {
                    $scope.events.push(answer.data);
                });

                $('#calendar').fullCalendar('removeEvents', calEvent.id);
                $state.go('calendar');
            };
            $scope.editEvent = function () {
                $scope.calEvent.start = $scope.calEvent._start._i;
                $scope.calEvent.end = $scope.calEvent._end._i;
                $state.go('calendar.editEvents');

                $scope.saveEditEvent = function () {
                    $scope.editEventObj = {
                        id: calEvent.id,
                        address: calEvent.address,
                        start: moment(calEvent.start).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                        end: moment(calEvent.end).format("YYYY-MM-DDTHH:mm:ss.SSS"),
                        title: calEvent.title,
                        region:calEvent.region.region,
                        phoneNumber: calEvent.phoneNumber,
                        fullTitle: calEvent.fullTitle,
                        htmlContent: calEvent.htmlContent
                    };
                    console.log($scope.editEventObj);
                    $http.post("/api/event/update", $scope.editEventObj).then(function (answer) {
                        $scope.events.push(answer.data);
                        $('#calendar').fullCalendar('updateEvent', calEvent);
                        console.log(answer.data);
                    });
                    // console.log(calEvent.id);
                    $state.go('calendar');

                };
                $scope.cancelEventEdit = function () {
                    console.log($scope.calEvent);
                    $state.go('calendar');
                }
            };
            $scope.iGoEvent = function () {
                angular.forEach($scope.events, function (event) {
                    var peopleIgoId = event.peopleGo.length + 1;
                    if (event.id == calEvent.id) {
                        $scope.newIgoOnEvent = {
                            id: peopleIgoId,
                            name: $scope.ls.user.name,
                            photo: $scope.ls.user.photo
                        };
                        event.peopleGo.push($scope.newIgoOnEvent);
                    }
                });
                $scope.iGoEventStatus = true;
                console.log($scope.newIgoOnEvent);
            };

            $scope.iDontGoEvent = function () {
                angular.forEach($scope.events, function (event) {
                    if (event.peopleGo == calEvent.peopleGo) {
                            console.log(event.peopleGo[event.peopleGo.length - 1]);
                            calEvent.peopleGo.splice(event.peopleGo[event.peopleGo.length - 1], 1);

                    }
                });
                $scope.iGoEventStatus = false;
            };

            $scope.newCommentEvent = {};
            $scope.addCommentEvent = function () {
                angular.forEach($scope.events, function (event, key) {
                    if (event.id == calEvent.id) {
                        $http.post("/api/add/comment/event/" + calEvent.id, $scope.newCommentEvent).then(function (data) {
                            $scope.commentForm = data.data.comments;
                            console.log(data.data);
                        });
                    }
                });
                $('#commentEvent').val("");
                //$state.go('viewEvents');
                $('#event-comment').removeClass("in");
            };


        };

        $scope.dayClick = function (eventDate) {
            // if(eventDate>date) {}
            $state.go('calendar.eventsAdd');
            // $scope.clickEventDate =  moment(eventDate).format("YYYY-MM-DD HH:mm");
            // $("#startData").val($scope.clickEventDate)
        };

        $('.dropdown-submenu a.test').on("click", function (e) {
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
    });
