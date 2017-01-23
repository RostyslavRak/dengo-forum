/**
 * massagesToUser controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('massagesToUserController', function ($scope,loginService) {
        $scope.ls = loginService;

        $('.conversation .massages').perfectScrollbar({
            suppressScrollX: true
        });

    });
