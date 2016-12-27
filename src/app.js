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
        'ngMockE2E'
    ])


    .run(function ($rootScope, $window) {
        // google analytics
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            var realURL = toState.url;
            if (!!$window.ga) {
                for (var v in toParams) {
                    realURL = realURL.replace(':' + v, toParams[v]);
                }
                $window.ga('send', 'pageview', realURL);
            }
        });

        var resolveDone = function () {
            $rootScope.doingResolve = false;
        };
        $rootScope.doingResolve = false;

        $rootScope.$on('$stateChangeStart', function () {
            $rootScope.doingResolve = true;
        });
        $rootScope.$on('$stateChangeSuccess', resolveDone);
        $rootScope.$on('$stateChangeError', resolveDone);
        $rootScope.$on('$statePermissionError', resolveDone);
    });
