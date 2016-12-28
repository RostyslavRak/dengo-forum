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
                    "Content": {
                        templateUrl: 'login/login.tpl.html',
                        controller: 'LoginController'
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
                    "Content": {
                        templateUrl: 'error/error.tpl.html',
                        accessLevel: accessLevels.public
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
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'pages/user.tpl.html',
                        accessLevel: accessLevels.user
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
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'post/post.tpl.html',
                        controller: 'PostController'
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
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postOne/post.one.tpl.html',
                        controller: 'PostOneController'
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
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'profile/profile.tpl.html',
                        controller: 'ProfileController'
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
                    "Content": {
                        templateUrl: 'register/register.tpl.html',
                        controller: 'RegisterController',
                        accessLevel: accessLevels.anon
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
                    "Sidebar": {
                        templateUrl: "sidebar/sidebar.tpl.html"
                    },
                    "Content": {
                        templateUrl: 'postAdd/postAdd.tpl.html',
                        controller: 'AddPostController'
                    }
                },
                resolve: {
                    'login':resovle
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
        // },
        // resolve: {
        //     'login':resovle
        // }
        // })

// Send to login if the URL was not found
        $urlRouterProvider.otherwise('/login');
   })


    //
    // .run(function ($rootScope, $window ) {
    //     // google analytics
    //     $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
    //         var realURL = toState.url;
    //         if (!!$window.ga) {
    //             for (var v in toParams) {
    //                 realURL = realURL.replace(':' + v, toParams[v]);
    //             }
    //             $window.ga('send', 'pageview', realURL);
    //         }
    //     });
    //
    //     var resolveDone = function () {
    //         $rootScope.doingResolve = false;
    //     };
    //     $rootScope.doingResolve = false;
    //
    //     $rootScope.$on('$stateChangeStart', function () {
    //         $rootScope.doingResolve = true;
    //     });
    //     $rootScope.$on('$stateChangeSuccess', resolveDone);
    //     $rootScope.$on('$stateChangeError', resolveDone);
    //     $rootScope.$on('$statePermissionError', resolveDone);
    // });


    // .run(function($rootScope, $state,loginService) {
    //     // google analytics
    //     $rootScope.$on('$stateChangeSuccess', function () {
    //         if (loginService.isLogged==false &&  ($state.current.name == 'user' || $state.current.name == 'post' || $state.current.name == 'postone' || $state.current.name == 'addPost' || $state.current.name == 'profile' )) {
    //             $state.go('login');
    //             console.log($state.current.name)
    //         }
    //
    //     });
    // });


    .run(function ($rootScope, $state, loginService) {
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
            if (toState.authenticate && !loginService.isLogged){
                // User isn’t authenticated
                $state.transitionTo("login");
                event.preventDefault();
            }
        });
    });
