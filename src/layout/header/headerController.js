app
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            TITLE: 'Welcome!',
            MESSAGE: 'This app supports your lanaguage!',
            text1: 'Why You Should Join Our Community ?',
            en: 'English',
            uk: 'Ukrainian'
        })
            .translations('uk', {
                TITLE: 'Välkommen!',
                MESSAGE: 'Denna app stöder ditt språk!',
                text1: 'Текс українською моваю і',
                en: 'English',
                uk: 'Ukrainian'
            });

        $translateProvider.preferredLanguage('uk');
    })
    .controller('HeaderController', function ($translate, $scope) {
        var ctrl = this;

        ctrl.language = 'uk';

        ctrl.languages = ['uk', 'en'];

        ctrl.updateLanguage = function() {
            $translate.use(ctrl.language);
        };
    });
