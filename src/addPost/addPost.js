angular.module('dengo-forum.addPost', ['angular-login.grandfather'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.addPost', {
                url: '/addPost',
                templateUrl: 'addPost/addPost.tpl.html',
                controller: 'addPostController'
            });
    })
    .controller('addPostController', function ($scope) {
    })
    .controller('wysiwygeditor', function ($scope) {
    });
