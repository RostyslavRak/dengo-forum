/**
 * viewEvents controller
 *
 * @author Dima Zelenyuk
 */



app
    .controller('viewEventsController', function ($scope, $state,$http) {
        $http.get("/api/events").then(function (answer) {
            $scope.events = answer.data;
        });
    });


