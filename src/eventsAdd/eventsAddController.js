/**
 * eventsAdd controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('eventsAddController', function ($scope) {

        var places;
        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(51.332242, -2.204647),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.markersHistory = [];
        $scope.markers = [];


        $scope.map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
        $scope.input = document.getElementById('pac-input');
        $scope.searchBox = new google.maps.places.SearchBox($scope.input);

        $scope.addToHistory = function() {
            $scope.$apply(function () {
                $scope.regione  = places[0].formatted_address.split(" область")[0].split(", ");
                $scope.markersHistory.unshift({
                    title: places[0].name,
                    location: places[0].geometry.location,
                    address_components: $scope.regione[$scope.regione.length - 1]

            });
                console.log($scope.regione[$scope.regione.length - 1])
            });
        };

        $scope.clearMarkers = function() {
            for (var i = 0; i < $scope.markers.length; i++) {
                $scope.markers[i].setMap(null);
            }
            $scope.markers = [];
        };

        $scope.newMarker = function(name,location) {
            $scope.markers.push(new google.maps.Marker({
                map: $scope.map,
                title: name,
                position: location
            }));
            $scope.map.panTo(location); // This will be ok when updated to only towns etc
        };


        $scope.map.addListener('bounds_changed', function() {
            $scope.searchBox.setBounds($scope.map.getBounds());
        });

        $scope.searchBox.addListener('places_changed', function() {
            places = $scope.searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            $scope.clearMarkers();

            places.forEach(function(place) {
                var name = place.name;
                var location = place.geometry.location;

                // Create a marker for each place
                $scope.newMarker(name,location);

                $scope.addToHistory();
            });

        });

        $scope.updatePin = function(marker) {
            $scope.clearMarkers();
            var name = marker.name;
            var location = marker.location;
            $scope.newMarker(name,location);
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
                $scope.dataStart = e.date.format("YYYY-MM-DD HH:mm");
            });
            $("#datetimepickerEnd").on("dp.change", function (e) {
                $('#datetimepickerStart').data("DateTimePicker").maxDate(e.date);
                $scope.dataEnd = e.date.format("YYYY-MM-DD HH:mm");
            });
        });
    });

