/**
 * privateMassages controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('privateMassagesController', function ($scope,loginService) {
        $scope.ls = loginService;
    });
