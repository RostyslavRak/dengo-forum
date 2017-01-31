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
        'textAngular',
        'ui.router',
        'templates-app',
        'ui.calendar',
        'angularMoment',
        // 'ngMockE2E',
        'ngCookies',
        // 'ngMap',
        'pascalprecht.translate',
        'angular-carousel',
        'ngTouch'
    ])

.run(function ($rootScope, $state, $window, loginService ) {
     $rootScope.$on("$stateChangeStart", function(event, toState){
         if (toState.authenticate && !loginService.isLogged){
             if(loginService.isLogged == false){
                 event.preventDefault();
                 $state.go('login');
             }
             if(toState.name == "calendar.viewEvents"){
                 $state.go('calendar');
                 event.preventDefault();
             }
             if(toState.name == "calendar.eventsAdd"){
                 $state.go('calendar');
                 event.preventDefault();
             }
             if(toState.name == "calendar.editEvents"){
                 $state.go('calendar');
                 event.preventDefault();
             }

         }
     });


});

