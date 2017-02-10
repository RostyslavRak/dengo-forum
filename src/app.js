/**
 * Angular application entry point
 * Defines Dengo-Forum module and add configuration for parsing all jsog
 *
 * @author Dima Zelenyuk
 */
var app = angular
    .module('dengo-forum', [
        'ngAnimate',
        'ui.bootstrap',
        'ngMdIcons',
        'ngMask',
        'textAngular',
        'ui.router',
        'templates-app',
        'ui.calendar',
        'angularMoment',
        'ngCookies',
        'ngMap',
        'pascalprecht.translate',
        'angular-carousel',
        'ngTouch'
    ])

.run(function ($rootScope, $state, $window, loginService ) {
     $rootScope.$on("$stateChangeStart", function(event, toState){
        // console.log(loginService.isLogged)
        // console.log(toState)
         //console.log(loginService.isLogged)
        if (toState.authenticate && !loginService.isLogged){
             if( toState.authenticate && loginService.isLogged == false){
                 event.preventDefault();
                 $state.go('login');
             }
            if(toState.name == "calendar.viewEvents" && loginService.isLogged == null){
                $state.go('calendar');
                 event.preventDefault();
             }
             if(toState.name == "calendar.eventsAdd" && loginService.isLogged == null){
                 $state.go('calendar');
                 event.preventDefault();
             }
             if(toState.name == "calendar.editEvents" && loginService.isLogged == null){
                 $state.go('calendar');
                 event.preventDefault();
             }
        }


     });


});

