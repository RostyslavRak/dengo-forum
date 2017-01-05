/**
 * eventsAdd controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('eventsAddController', function ($scope) {

        $scope.mytime = new Date();
        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.address = "";

    });
