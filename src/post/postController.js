app
    .controller('PostController', function ($scope) {

        $scope.posts =  [
            {   id: 0,
                title  : "Основні функції GIT: це просто та зручно !",
                categoryGroup:"Регіональні групи",
                sity:"Львів",
                content:"Основні функції GIT: це просто та зручно ! Git — розподілена система керування версіями файлів та спільної роботи. Проект створив Git є однією з найефективніших, надійних і високопродуктивних систем керування версіями, що надає гнучкі засоби нелінійної розробки, що базуються на відгалуженні і злитті гілок. Для забезпечення цілісності історії та стійкості до змін заднім числом використовуються криптографічні методи, також можлива прив'язка цифрових підписів розробників до тегів і комітів.",
                date  : "05-01-2017",
                author :{
                    name:"Ross",
                    photo:"images/src/viawEvents/images/ross.jpg",
                    phoneNumber:"+38-097-00-00-000"
                },
                likes:[
                ],
                comments:[
                ]
            },


            {   id: 1,
                title  : "Як зберігати файли у GIT",
                categoryGroup:"Загальні теми для обговорення",
                sity:"Львів",
                content:"Git, на відміну від Subversion і подібних до неї систем, не зберігає інформацію як список змін (патчів) для файлів. Замість цього",
                date  : "15-01-2017",
                author  :{
                    name:"Dima",
                    photo:"images/src/viawEvents/images/dima.jpg",
                    phoneNumber:"+38-097-11-11-111"

                },
                likes:[
                ],
                comments:[
                ]
            }
        ];




    });



