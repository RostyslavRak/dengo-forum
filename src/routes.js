angular.module('dengo-forum.routing', ['ui.router', 'templates-app'])
.config( function ( $stateProvider, $urlRouterProvider ) {

        //Main provider
        $stateProvider
                .state('app', {
                    abstract: true,
                    template: '<ui-view></ui-view>'
                    // resolve: {
                    //     'login': function (loginService, $q, $http) {
                    //         var roleDefined = $q.defer();
                    //
                    //         if (loginService.pendingStateChange) {
                    //             return loginService.resolvePendingState($http.get('/user'));
                    //         } else {
                    //             roleDefined.resolve();
                    //         }
                    //         return roleDefined.promise;
                    //     }
                    // }
                })

            .state('app.login', {
                url: '/login',
                        templateUrl: 'login/login.tpl.html',
                        controller: 'LoginController'

            })

            .state('app.error', {
                url: '/error/:error',
                templateUrl: 'error/error.tpl.html',
                accessLevel: accessLevels.public
            })

            .state('app.addPost', {
                url: '/addPost',
                templateUrl: 'addPost/addPost.tpl.html',
                controller: 'addPostController'
            })

            .state('app.user', {
                url: '/user',
                templateUrl: 'pages/user.tpl.html',
                accessLevel: accessLevels.user
            })

            .state('app.post', {
                url: '/post',
                templateUrl: 'post/post.tpl.html',
                controller: 'PostController'
            })

            .state('app.postone', {
                url: '/postone',
                templateUrl: 'postOne/post.one.tpl.html',
                controller: 'PostOneController'
            })

            .state('app.profile', {
                url: '/profile',
                templateUrl: 'profile/profile.tpl.html',
                controller: 'ProfileController'
            })

            .state('app.register', {
                url: '/register',
                templateUrl: 'register/register.tpl.html',
                controller: 'RegisterController',
                accessLevel: accessLevels.anon
            });

        // .state('app.admin', {
        //   url: '/admin',
        //   templateUrl: 'pages/admin.tpl.html',
        //   accessLevel: accessLevels.admin
        // })

    } );