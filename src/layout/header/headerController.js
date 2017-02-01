app
    .config(function($translateProvider) {

        $translateProvider.determinePreferredLanguage();

        $translateProvider.translations('en', {
            TITLE: 'Welcome!',
            MESSAGE: 'This app supports your lanaguage!',
            text1: 'Why You Should Join Our Community ?',
            topAuthors: 'TOP-5 Authors',
            topPosts: 'TOP-5 Posts',
            eventsCalendar: 'Calendar',
            category: 'Category',
            common: 'Common discussion',
            regional_groups: 'Regional Groups',
            west: 'West',
            log_in: 'Log in',
            log_out: 'Log out',
            en: 'EN',
            uk: 'UA',
            ru: 'RU'
        })
            .translations('uk', {
                TITLE: 'Ласкаво просимо!',
                MESSAGE: 'Denna app stöder ditt språk!',
                text1: 'Текс українською моваю і',
                topAuthors: 'TOP-5 Авторів',
                topPosts: 'TOP-5 Постів',
                eventsCalendar: 'Календар Подій',
                category: 'Категорії',
                common: 'Загальні теми для обговорення',
                regional_groups: 'Регіональні групи',
                west: 'Захід',
                en: 'EN',
                uk: 'UA',
                ru: 'RU'
            })
            .translations('ru', {
                TITLE: 'Приветствую!',
                MESSAGE: 'Привет на рус!',
                text1: 'Текс на русском',
                topAuthors: 'TOP-5 Авторов',
                topPosts: 'TOP-5 Постов',
                eventsCalendar: 'Календар Рус',
                category: 'Категории',
                common: 'общие темы для дискуссий',
                regional_groups: 'Региональные групы',
                west: 'Запад',
                en: 'EN',
                uk: 'UA',
                ru: 'RU'
            });



        // $translateProvider.preferredLanguage('uk');
    })
    .controller('HeaderController', function ($translate, $scope, $state) {
       // console.log($state.current.name);


        var ctrl = this;

        ctrl.language = 'uk';

        ctrl.languages = ['uk', 'en', 'ru'];

        ctrl.updateLanguage = function() {
            $translate.use(ctrl.language);
        };
//         ngular.module('myApp').run(['$rootScope', 'StorageService', function($rootScope, StorageService) {
//             $rootScope.currentLanguage = StorageService.local.get('NG_TRANSLATE_LANG_KEY') || 'en';
//         }]);
// console.log('NG_TRANSLATE_LANG_KEY')
    });
