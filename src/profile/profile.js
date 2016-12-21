angular.module('dengo-forum.profile', ['angular-login.grandfather'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.profile', {
                url: '/profile',
                templateUrl: 'profile/profile.tpl.html',
                controller: 'ProfileController'
            });
    })
    .controller('ProfileController', function ($scope) {
    });
