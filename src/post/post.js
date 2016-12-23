angular.module('dengo-forum.post', ['angular-login.grandfather'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.post', {
                url: '/post',
                templateUrl: 'post/post.tpl.html',
                controller: 'PostController'
            });
    })
    .controller('PostController', function ($scope) {
        // $(document).ready(function () {
        //     $("#tree").jstree({
        //         "plugins": ["wholerow"]
        //     });
        // });
    })
    .controller('PaginationDemoCtrl', function ($scope) {
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    });
