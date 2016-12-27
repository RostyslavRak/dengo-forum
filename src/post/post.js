angular.module('dengo-forum.post', ['dengo-forum.routing'])

    .controller('PostController', function ($scope) {
        $(document).ready(function () {
            $("#tree").jstree({
                "plugins": ["wholerow"]
            });
        });
    });
