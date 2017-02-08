/**
 * eventsAdd controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('eventsAddController', function ($scope,$state, $http) {
        $http.get("/api/regions").then(function (answer) {
            $scope.regions = answer.data;
        });

        // $(document).ready(function () {
        //     $('#phoneNumber').inputmask("+38(999) 99-99-999");
        // });

        $scope.center = new google.maps.LatLng(49.85, 24.0166666667);
        $scope.input = document.getElementById('pac-input');
        $scope.searchBox = new google.maps.places.SearchBox($scope.input);

        $scope.newMarker = function() {
            $scope.map.panTo($scope.searchBox.getPlaces()[0].geometry.location);
        };
        $scope.searchBox.addListener('places_changed', function() {
            $scope.newMarker();

            $scope.newEvent.address = $scope.searchBox.getPlaces()[0].formatted_address;
           // $scope.regionTest = $scope.searchBox.getPlaces()[0].formatted_address.split(" область")[0].split(", ");
           // $scope.newEvent.region = $scope.regionTest[$scope.regionTest.length - 1];
        });


        $scope.newEvent = {
        };

        $scope.addEvent = function () {
            $scope.newEvent.start = moment($scope.newEvent.start).format("YYYY-MM-DDTHH:mm:ss.SSS");
            $scope.newEvent.end = moment($scope.newEvent.end).format("YYYY-MM-DDTHH:mm:ss.SSS");
            $http.post("/api/event", $scope.newEvent).then(function (answer) {
                $scope.events.push(answer.data);
                $('#calendar').fullCalendar('renderEvent', $scope.newEvent);
                console.log(answer.data)
            });
            $state.go('calendar');
            //location.reload()
        };




        $(function () {
            $('#datetimepickerStart').datetimepicker({
                format : "YYYY-MM-DD HH:mm"
            });


            $('#datetimepickerEnd').datetimepicker({
                format : "YYYY-MM-DD HH:mm",
                useCurrent: false
            });

            $("#datetimepickerStart").on("dp.change", function (e) {
                $('#datetimepickerEnd').data("DateTimePicker").minDate(e.date);
                $scope.newEvent.start = e.date.format("YYYY-MM-DD HH:mm");
            });
            $("#datetimepickerEnd").on("dp.change", function (e) {
                $('#datetimepickerStart').data("DateTimePicker").maxDate(e.date);
                $scope.newEvent.end = e.date.format("YYYY-MM-DD HH:mm");
            });
        });




    });

