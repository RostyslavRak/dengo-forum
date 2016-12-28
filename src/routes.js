/**
 * Application router
 * Config that holds all possible routes in client-side application
 *
 * @author Dima Zelenyuk
 */

app

    .config(function ($stateProvider, $urlRouterProvider) {

        var resovle =  function (loginService, $q, $http) {
            var roleDefined = $q.defer();

            if (loginService.pendingStateChange) {
                return loginService.resolvePendingState($http.get('/user'));
            } else {
                roleDefined.resolve();
            }
            return roleDefined.promise;
        };

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
                authenticate: false,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'login/login.tpl.html',
                        controller: 'LoginController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            })

            .state('error', {
                authenticate: false,
                url: '/error/:error',
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'error/error.tpl.html',
                        accessLevel: accessLevels.public
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            })


            .state('user', {
                url: '/user',
                authenticate: true,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'pages/user.tpl.html',
                        accessLevel: accessLevels.user
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            })

            .state('post', {
                url: '/post',
                authenticate: true,

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'post/post.tpl.html',
                        controller: 'PostController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }

                },
                resolve: {
                    'login':resovle
                }
            })

            .state('postone', {
                url: '/postone',
                authenticate: true,

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postOne/post.one.tpl.html',
                        controller: 'PostOneController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            })

            .state('profile', {
                url: '/profile',
                authenticate: true,

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "ProfileHeader": {
                        templateUrl: 'layout/profileHeader/profileHeader.tpl.html',
                        controller: 'ProfileHeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'profile/profile.tpl.html',
                        controller: 'ProfileController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            })

            .state('register', {
                url: '/register',
                authenticate: false,

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'register/register.tpl.html',
                        controller: 'RegisterController',
                        accessLevel: accessLevels.anon
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },

                resolve: {
                    'login':resovle
                }
            })

            .state('addPost', {
                url: '/postAdd',
                authenticate: true,

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postAdd/postAdd.tpl.html',
                        controller: 'AddPostController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },
                resolve: {
                    'login':resovle
                }
            });


// Send to login if the URL was not found
        $urlRouterProvider.otherwise('/login');
   })

   .run(function ($rootScope, $state, loginService) {
        $rootScope.$on("$stateChangeStart", function(event, toState){
            if (toState.authenticate && !loginService.isLogged){
                // User isn’t authenticated
                $state.go("login");
                event.preventDefault();
            }
        });
    });
