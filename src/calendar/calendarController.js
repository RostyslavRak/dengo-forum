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

        /* event source that contains custom events on the scope */
        $scope.events = [
            { title: 'Плануємо цікаву зустріч всіх хто живе прагамуванням і хто має бажання знайти однодумців. Перша неформальна тема : Моє бачення перспектив ІТ в Україні та Світі.',
                start: new Date(y, m, d)
            }

        ];



        $scope.eventClick = function (calEvent) {
            $state.go('calendar.viawEvents');
        };

        $scope.dayClick = function(date ){
            $('#start').val(date.format('YYYY-MM-DD'));
            $state.go('calendar.eventsAdd');
        };

            /* config object */
        $(function() {
            $('#calendar').fullCalendar({
                //editable: true,
                header: {
                    left: 'month,agendaWeek,agendaDay,today ',
                    center: 'title',
                   right: 'prev,next'
                },
                dayClick: $scope.dayClick,
                eventClick: $scope.eventClick,
                events: $scope.events

            })});


    });
