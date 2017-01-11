/**
 * ViawEvents controller
 *
 * @author Dima Zelenyuk
 */



app
    .controller('ViawEventsController', function ($scope, $state, $uibModal, $log, $document) {
        $scope.comment = "Коментар до події";

            var $ctrl = this;

            $ctrl.animationsEnabled = true;

            $ctrl.open = function (size, parentSelector) {
                    var parentElem = parentSelector ?
                        angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
                    var modalInstance = $uibModal.open({
                            animation: $ctrl.animationsEnabled,
                            ariaLabelledBy: 'modal-title',
                            ariaDescribedBy: 'modal-body',
                            templateUrl: 'myModalContent.html',
                            controllerAs: '$ctrl',
                            size: size,
                            appendTo: parentElem,
                            resolve: {
                                    items: function () {
                                            return $ctrl.items;
                                    }
                            }
                    });

                    modalInstance.result.then(function (selectedItem) {
                            $ctrl.selected = selectedItem;
                    });
            };
    });


