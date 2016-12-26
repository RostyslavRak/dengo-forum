angular.module('dengo-forum.postone', ['angular-login.grandfather'])
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.postone', {
                url: '/postone',
                templateUrl: 'postOne/post.one.tpl.html',
                controller: 'PostOneController'
            });
    })
    .controller('PostOneController', function ($scope) {
        // $(document).ready(function () {
        //     $("#tree").jstree({
        //         "plugins": ["wholerow"]
        //     });
        // });
    })
    .controller('PaginationDemoCtrl', function ($scope) {
        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    })
    .controller('ButtonsCtrl', function ($scope) {
        $scope.singleModel = 1;
    })
    .controller('DatepickerDemoCtrl', function ($scope) {
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.options = {
            customClass: getDayClass,
            minDate: null,
            showWeeks: false,
            yearColumns: 4
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.toggleMin = function() {
            $scope.options.minDate = $scope.options.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        $scope.events = [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }
            return '';
        }
    });
