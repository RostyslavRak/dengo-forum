/**
 * eventsAdd controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('eventsAddController', function ($scope) {
        $scope.map = { center: { latitude: 49.8415, longitude: 24.0297 }, zoom: 8 };

        $scope.options = {scrollwheel: false};
        $scope.coordsUpdates = 0;
        $scope.dynamicMoveCtr = 0;
        $scope.marker = {
            id: 0,
            coords: {
                latitude: 49.8415,
                longitude: 24.0297
            }
        };
        $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
            if (_.isEqual(newVal, oldVal))
                return;
            $scope.coordsUpdates++;
        });

        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 1;




    });
