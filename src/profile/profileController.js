app
    .controller('ProfileController', function ($scope,loginService,$http) {
       $scope.ls = loginService;
        $scope.user = null;
        $scope.profile = true;

$http.get("/api/user/my").then(function (answer) {
    console.log(answer.data)
    $scope.user = answer.data;
});
        $scope.profileEdit = function () {
            $scope.profile = false;
        };

        var img = document.getElementById('img');
        function handleFileSelect(evt) {
            var file = evt.target.files[0];
            img.src = window.URL.createObjectURL(file);
        }
        document.getElementById('filePhoto').addEventListener('change', handleFileSelect, false);

        function performClick(node) {
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, false);
            node.dispatchEvent(evt);
        }

        $scope.addAvatarPhoto = function() {
            performClick(document.getElementById('filePhoto'));
        };

        $scope.deleteAvatarPhoto = function () {
            $scope.ls.user.photo = "images/src/register/images/no_image1.png";
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].photo = $scope.ls.user.photo;
            console.log($scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")]);
            localStorage.setItem('userStorage', angular.toJson($scope.users));
        };
        $scope.saveProfileEdit = function () {
            $scope.profile = true;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].name =  $scope.ls.user.name;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].city =  $scope.ls.user.city;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].company =  $scope.ls.user.company;
            $scope.users[localStorage.getItem('tokenStorage').split(":\"")[1].replace("\"}", "")].companySite =  $scope.ls.user.companySite;
            $scope.ls.user.photo = img.src;
            localStorage.setItem('userStorage', angular.toJson($scope.users));
        };








    });
