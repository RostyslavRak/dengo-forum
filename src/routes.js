/**
 * Application router
 * Config that holds all possible routes in client-side application
 *
 * @author Dima Zelenyuk
 */

app
    .config(function ($stateProvider, $urlRouterProvider) {
        //Main provider
        $stateProvider

            // .state('app', {
            //     abstract: true,
            //     resolve: {
            //         'login': function (loginService, $q, $http) {
            //             var roleDefined = $q.defer();
            //
            //             if (loginService.pendingStateChange) {
            //                 return loginService.resolvePendingState($http.get('/user'));
            //             } else {
            //                 roleDefined.resolve();
            //             }
            //             return roleDefined.promise;
            //         }
            //     }
            // })

            .state('login', {
                url: '/login',
                views: {
                    "Content": {
                        templateUrl: 'login/login.tpl.html',
                        controller: 'LoginController'
                    }
                },
                resolve: {
                    'login': function (loginService, $q, $http) {
                        var roleDefined = $q.defer();

                        if (loginService.pendingStateChange) {
                            return loginService.resolvePendingState($http.get('/user'));
                        } else {
                            roleDefined.resolve();
                        }
                        return roleDefined.promise;
                    }
                }
            })



            .state('error', {
                url: '/error/:error',
                views: {
                    "Content": {
                        templateUrl: 'error/error.tpl.html',
                        accessLevel: accessLevels.public
                    }
                }
            })


            .state('user', {
                url: '/user',
                views: {
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'pages/user.tpl.html',
                        accessLevel: accessLevels.user
                    }
                }
            })

            .state('post', {
                url: '/post',

                views: {
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'post/post.tpl.html',
                        controller: 'PostController'
                    }
                }
            })

            .state('postone', {
                url: '/postone',
                views: {
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postOne/post.one.tpl.html',
                        controller: 'PostOneController'
                    }
                }
            })

            .state('profile', {
                url: '/profile',
                views: {
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'profile/profile.tpl.html',
                        controller: 'ProfileController'
                    }
                }
            })

            .state('register', {
                url: '/register',
                views: {
                    "Content": {
                        templateUrl: 'register/register.tpl.html',
                        controller: 'RegisterController',
                        accessLevel: accessLevels.anon
                    }
                }
            })

            .state('addPost', {
                url: '/postAdd',
                views: {
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postAdd/postAdd.tpl.html',
                        controller: 'AddPostController'
                    }
                }
            });



        // .state('admin', {
        //   url: '/admin',
        // views: {
        //     "Sidebar": {
        //         template: "index.viewA"
        //     },
        //     "Content": {
        //           templateUrl: 'pages/admin.tpl.html',
        //           accessLevel: accessLevels.admin
        //     }
        // }
        // })

        $urlRouterProvider.otherwise('/login');

   });