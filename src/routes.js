/**
 * Application router
 * Config that holds all possible routes in client-side application
 *
 * @author Dima Zelenyuk
 */

app.config(function ($stateProvider, $urlRouterProvider) {
        //Main provider
        $stateProvider
            .state('welcome', {
                authenticate: false,
                url: '/',

                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "ProfileHeader": {
                        templateUrl: 'welcome/welcome.tpl.html',
                        controller: 'WelcomeController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/statisticfooter.tpl.html'
                    }
                }
            })
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
                        controller: 'PagesController',
                        accessLevel: accessLevels.user
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })

            .state('post', {
                url: '/post',
                params:{
                    regionId: null
                },
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

                }
            })

            .state('postone', {
                url: '/postone',
                authenticate: true,
                params:{
                    postId: null
                },
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
                }
            })

            .state('addPost', {
                url: '/postAdd',
                authenticate: true,
                views:{
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Sidebar": {
                        templateUrl: "layout/sidebar/sidebar.tpl.html",
                        controller: 'SidebarController'
                    },
                    "Content":{
                        templateUrl: 'postAdd/postAdd.tpl.html',
                        controller: 'postAddController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })


            .state('profile', {
                url: '/profile/{nickName}',
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
                        templateUrl: 'profile/profile.tpl.html',
                        controller: 'ProfileController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })
            .state('privateMassages', {
                url: '/privateMassages',
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
                        templateUrl: 'privateMassages/privateMassages.tpl.html',
                        controller: 'privateMassagesController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })

            .state('massagesToUser', {
                url: '/massagesToUser',
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
                        templateUrl: 'massagesToUser/massagesToUser.tpl.html',
                        controller: 'massagesToUserController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
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
                }
            })

            .state('forgotPassword', {
                url: '/forgotPassword',
                authenticate: false,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'forgotPassword/forgotPassword.tpl.html',
                        controller: 'ForgotPasswordController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })
            .state('termsConditions', {
                url: '/termsConditions',
                authenticate: false,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'termsConditions/termsConditions.tpl.html'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
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
                }
            })

            .state('calendar.eventsAdd', {
                url: '/eventsAdd',
                authenticate: true,
                        templateUrl: 'eventsAdd/eventsAdd.tpl.html',
                        controller: 'eventsAddController'
            })

            .state('admin', {
                url: '/admin',
                authenticate: true,
                views: {
                    "Header": {
                        templateUrl: 'layout/header/header.tpl.html',
                        controller: 'HeaderController'
                    },
                    "Content": {
                        templateUrl: 'pages/admin.tpl.html',
                        controller: 'PagesController'
                    },
                    "Footer": {
                        templateUrl: 'layout/footer/footer.tpl.html'
                    }
                }
            })

            .state('calendar.editEvents', {
                    url: '/editEvents',
                authenticate: true,
                templateUrl: 'editEvents/editEvent.tpl.html',
                controller: 'editEventController'
            })

            .state('calendar.viewEvents', {
                url: '/viewEvents',
                authenticate: true,
                templateUrl: 'viewEvents/viewEvents.tpl.html',
                controller: 'viewEventsController'
            });


            $urlRouterProvider.otherwise('/');


    });


