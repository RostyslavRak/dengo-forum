/**
 * editEvent controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('editEventController', function ($scope) {


        $scope.center = new google.maps.LatLng(49.85, 24.0166666667);
        $scope.input = document.getElementById('pac-input');
        $scope.searchBox = new google.maps.places.SearchBox($scope.input);


        $scope.newMarker = function() {
            $scope.map.panTo($scope.searchBox.getPlaces()[0].geometry.location);
        };
        $scope.searchBox.addListener('places_changed', function() {
            $scope.newMarker();

            $scope.calEvent.address = $scope.searchBox.getPlaces()[0].formatted_address;
            $scope.regionTest = $scope.searchBox.getPlaces()[0].formatted_address.split(" область")[0].split(", ");
            $scope.calEvent.region = $scope.regionTest[$scope.regionTest.length - 1];
        });




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
                $scope.dataStartEdit = e.date.format("YYYY-MM-DD HH:mm");
            });
            $("#datetimepickerEnd").on("dp.change", function (e) {
                $('#datetimepickerStart').data("DateTimePicker").maxDate(e.date);
                $scope.dataEndEdit = e.date.format("YYYY-MM-DD HH:mm");
            });
        });

});
