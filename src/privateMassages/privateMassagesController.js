/**
 * privateMassages controller
 *
 * @author Dima Zelenyuk
 */

app
    .controller('privateMassagesController', function ($scope,loginService) {
        $scope.ls = loginService;

        $('.conversationPrivate .massagesPrivate').perfectScrollbar({
            suppressScrollX: true
        });

    });
