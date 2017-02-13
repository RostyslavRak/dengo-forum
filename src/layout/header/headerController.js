app
    .config(function($translateProvider) {

        $translateProvider.determinePreferredLanguage();

        $translateProvider.translations('en', {
            Welcome: 'Welcome!',
            Login_to_start: "Login to start",
            registration: 'Registration',
            name: 'Name*',
            nick_name: 'Nick Name*',
            error_name: 'Provided name is too short!',
            error_name_long: 'Max name length is 32, please shorten it.',
            error_name_is: "Username is already taken.",
            error_pass: "Passwords do not match.",
            error_pass_short: 'For your own safety, use a password longer than 6 characters.',
            error_email: "E-Mail seems invalid.",
            error_email_is: "E-Mail is already taken.",
            password: 'Password*',
            repeatPassword: 'Repeat password*',
            selectCity: 'Select oblast*',
            сompanyName: 'Company Name',
            Website: "Website",
            Lviv: 'Lviv',
            Lutsk: "Lutsk",
            Ivano_Frankivsk: "Ivano-Frankivsk",
            Rivne: "Rivne",
            Ternopil: "Ternopil",
            Uzhhorod: "Uzhhorod",
            Chernivtsi: "Chernivtsi",
            Donetsk: "Donetsk",
            Lugansk: "Lugansk",
            Kharkiv: "Kharkiv",
            Kiev: "Kiev",
            Vinnytsia: "Vinnytsia",
            Dnipro: "Dnipro",
            Poltava: "Poltava",
            Khmelnytskyi: "Khmelnytskyi",
            Cherkasy: "Cherkasy",
            Mykolaiv: "Mykolaiv",
            Odessa: "Odessa",
            Zaporizhia: "Zaporizhia",
            Kropyvnytskyi: "Kropyvnytskyi",
            Kherson: "Kherson",
            Crimea: "Crimea",
            Zhytomyr: "Zhytomyr",
            Chernihiv: "Chernihiv",
            Sumy:"Sumy",
            terms1: "I agree ",
            terms2: "with terms and conditions",
            register: "Register",
            print_text: "Print text here",
            CheckTheRole: "Check the role",
            admin: "Administrator",
            moderator: 'Moderator',
            user_url: 'User Identifier',

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
                Welcome: 'Ласкаво просимо!',
                registration: 'Реєстрація',
                Login_to_start: "Залогуйтеся",

                name: "Ім'я*",
                nick_name: "Ім'я користувача*",
                error_name: 'Введене слово надто коротке!',
                error_name_long: 'Максимальна довжина слова 32 символи, буда-ласка зменьшіть.',
                error_name_is: "Імя користувача вже використовується",
                error_pass: "Паролі не співпадають.",
                error_pass_short: 'Для Вашої безпеки використовуйте пароль не коротший 6 символів',
                error_email: "E-Mail не вірний",
                error_email_is: "E-Mail вже використовується",
                password: 'Пароль*',
                repeatPassword: 'Повторіть пароль*',
                selectCity: 'Оберіть область*',
                сompanyName: 'Назва фірми',
                Website: "Сторінка в інтернеті",
                Lviv: 'Львівська',
                Lutsk: "Луцька",
                Ivano_Frankivsk: "Івано-Франківська",
                Rivne: "Рівненська",
                Ternopil: "Тернопільська",
                Uzhhorod: "Ужгородська",
                Chernivtsi: 'Чернівецька',
                Donetsk: "Донецька",
                Lugansk: "Луганська",
                Kharkiv: "Харківська",
                Kiev: "Київська",
                Vinnytsia: "Вінницька",
                Dnipro: "Дніпропетровська",
                Poltava: "Полтавська",
                Khmelnytskyi: "Хмельницька",
                Cherkasy: "Черкаська",
                Mykolaiv: "Миколаївська",
                Odessa: "Одеська",
                Zaporizhia: "Запоріжська",
                Kropyvnytskyi: "Кіровоградська",
                Kherson: "Херсон",
                Crimea: "АР Крим",
                Zhytomyr: "Житомир",
                Chernihiv: "Чернігів",
                Sumy:"Суми",
                terms1: "Я погоджуюсь ",
                terms2: "з умовами конфіденційності",
                register: "Зареєструватися",
                print_text: "Введіть Ваш текст тут",
                user_url: 'Ідентифікатор користувача',
                CheckTheRole: "Визначіть роль користувача",
                admin: "Адміністратор",
                moderator: 'Модератор',

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
                Welcome: 'Приветствем!',
                registration: 'Регистрация',

                name: "Имя*",
                nick_name: "Имя пользователя*",

                // errors
                error_name: 'Введённое слово слишком краткое!',
                error_name_long: 'Максимальная длинна слова 32 символа, пожалуйста сократите.',
                error_name_is: "Имя пользователя уже используется",
                error_pass: "Пароли не совпадают.",
                error_pass_short: 'Для Вашой безопастности используйте пароль не меньше 6 символов',
                error_email: "E-Mail не верный",
                error_email_is: "E-Mail уже используется",


                password: 'Пароль*',
                repeatPassword: 'Повторите пароль*',
                selectCity: 'Выберите область*',
                сompanyName: 'Название фирмы',
                Website: "Страница в интернете",

                Lviv: 'Львовская',
                Lutsk: "Луцькая",
                Ivano_Frankivsk: "Ивано-Франковськая",
                Rivne: "Ровненская",
                Ternopil: "Тернопольская",
                Uzhhorod: "Ужгородская",
                Chernivtsi: 'Черновецкая',
                Donetsk: "Донецькая",
                Lugansk: "Луганская",
                Kharkiv: "Харковская",
                Kiev: "Киевская",
                Vinnytsia: "Винницкая",
                Dnipro: "Днепропетровская",
                Poltava: "Полтавская",
                Khmelnytskyi: "Хмельницкая",
                Cherkasy: "Черкаская",
                Mykolaiv: "Николаевская",
                Odessa: "Одесская",
                Zaporizhia: "Запорожская",
                Kropyvnytskyi: "Кировоградская",
                Kherson: "Херсонская",
                Crimea: "АР Крым",
                Zhytomyr: "Житомир",
                Chernihiv: "Чернигов",
                Sumy:"Сумы",
                terms1: "Я согласен ",
                terms2: "с условиями конфиденциaльности",
                register: "Зарегистрироваться",
                print_text: "Введите Ваш текст сдесь",
                user_url: 'Идентификатор пользователя',
                CheckTheRole: "Назначьте роль порльзователю",
                admin: "Администратор",
                moderator: 'Модератор',


                topAuthors: 'TOP-5 Авторов',
                topPosts: 'TOP-5 Постов',
                eventsCalendar: 'Календар',
                category: 'Категории',
                common: 'общие темы для дискуссий',
                regional_groups: 'Региональные групы',
                west: 'Запад',
                en: 'EN',
                uk: 'UA',
                ru: 'RU'
            });
        $translateProvider.preferredLanguage('uk');
    })
    .controller('HeaderController', function ($translate, $scope, $state,$rootScope) {
        $rootScope.$on('myProfile', function (event, data) {
            $scope.user = data;
        });

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





