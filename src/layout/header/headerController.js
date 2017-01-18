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
            catcommon: 'Common discussion',
            en: 'EN',
            uk: 'UA',
            ru: 'RU'
        })
            .translations('uk', {
                TITLE: 'Välkommen!',
                MESSAGE: 'Denna app stöder ditt språk!',
                text1: 'Текс українською моваю і',
                topAuthors: 'TOP-5 Авторів',
                topPosts: 'TOP-5 Постів',
                eventsCalendar: 'Календар Подій',
                category: 'Категорії',
                catcommon: 'Загальні теми для обговорення',
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
                catcommon: 'общие темы для дискуссий',
                en: 'EN',
                uk: 'UA',
                ru: 'RU'
            });



        // $translateProvider.preferredLanguage('uk');
    })
    .controller('HeaderController', function ($translate, $scope,$state) {
       // console.log($state.current.name);


        var ctrl = this;

        ctrl.language = 'uk';

        ctrl.languages = ['uk', 'en', 'ru'];

        ctrl.updateLanguage = function() {
            $translate.use(ctrl.language);
        };



    });
