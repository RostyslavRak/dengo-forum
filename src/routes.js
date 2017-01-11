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

            .state('welcome', {
                authenticate: false,
                url: '/welcome',

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "ProfileHeader": {
                        templateUrl: 'welcome/welcome.tpl.html',
                        controller: 'WelcomeController',
                        accessLevel: accessLevels.public
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/statisticfooter.tpl.html'
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
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'

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
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'
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
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'
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
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'
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
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'
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
            })
            .state('calendar', {
                url: '/calendar',
                authenticate: true,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "ProfileHeader": {
                        templateUrl: 'calendar/calendar.tpl.html',
                        controller: 'CalendarController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                },

                resolve: {
                    'login':resovle
                }
            })

            .state('calendar.eventsAdd', {
                url: '/eventsAdd',
                authenticate: true,
                        templateUrl: 'eventsAdd/eventsAdd.tpl.html',
                        controller: 'eventsAddController',
                resolve: {
                    'login':resovle
                }
            })

            .state('calendar.editEvents', {
                    url: '/editEvents',
                authenticate: true,
                templateUrl: 'editEvents/editEvent.tpl.html',
                controller: 'editEventController',
                resolve: {
                    'login':resovle
                }
            })

            .state('calendar.viawEvents', {
                url: '/viawEvents',
                authenticate: true,
                templateUrl: 'viawEvents/viawEvents.tpl.html',
                controller: 'ViawEventsController',
                resolve: {
                    'login':resovle
                }
            });


// Send to login if the URL was not found
        $urlRouterProvider.otherwise('/welcome');
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
