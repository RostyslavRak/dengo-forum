app
    .controller('PostController', function ($rootScope, $state, $http, $scope, $stateParams) {
        console.log($stateParams.regionId)

        if($stateParams.regionId != null){
            $http.get("/api/post/region/" + $stateParams.regionId).then(function (data) {
                $rootScope.posts = data.data;
                console.log (data.data)
            });
        }else {
            $http.get("/api/posts" + $stateParams.regionId).then(function (data) {
                $rootScope.posts = data.data;
                console.log (data.data)
            });
        }

        $scope.goPost = function (postId) {
            $state.go("postone", {"postId": postId});
        };

        // $scope.countLike = function (countLike) {
        //     countLike.like += 1;
        //     $http.countLike("/api/post", $scope.newPost);
        // };
        //


        $scope.search = null;
        $scope.$watch("search", function (data) {
           console.log(data)
        });


        // $rootScope.posts =  [
        //     {   id: 0,
        //         title  : "Основні функції GIT: це просто та зручно !",
        //         categoryGroup:"Регіональні групи",
        //         sity:"Львів",
        //         content:"Основні функції GIT: це просто та зручно ! Git — розподілена система керування версіями файлів та спільної роботи. Проект створив Git є однією з найефективніших, надійних і високопродуктивних систем керування версіями, що надає гнучкі засоби нелінійної розробки, що базуються на відгалуженні і злитті гілок. Для забезпечення цілісності історії та стійкості до змін заднім числом використовуються криптографічні методи, також можлива прив'язка цифрових підписів розробників до тегів і комітів.",
        //         data  : "02-01-2017",
        //         author :{
        //             name:"Ross",
        //             photo:"images/src/viewEvents/images/ross.jpg",
        //             phoneNumber:"+38-097-00-00-000"
        //         },
        //         likes:[
        //         ],
        //         comments:[{
        //             id: 0,
        //             name:"Dima",
        //             data:"15-01-2017",
        //             photo:"images/src/viewEvents/images/dima.jpg",
        //             commentContent:"Для Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керуванняля Основні Git є однією з найефективніших, надійних і високопродуктивних систем керування ",
        //             likes:[
        //             ]
        //         }
        //         ]
        //     },
        //
        //
        //     {   id: 1,
        //         title  : "Як зберігати файли у GIT",
        //         categoryGroup:"Загальні теми для обговорення",
        //         sity:"Львів",
        //         content:"Git, на відміну від Subversion і подібних до неї систем, не зберігає інформацію як список змін (патчів) для файлів. Замість цього",
        //         data  : "15-01-2017",
        //         author  :{
        //             name:"Dima",
        //             photo:"images/src/viewEvents/images/dima.jpg",
        //             phoneNumber:"+38-097-11-11-111"
        //
        //         },
        //         likes:[
        //         ],
        //         comments:[{}
        //         ]
        //     }
        // ];


    });



