app
    .controller('PostController', function ($scope) {
        $(document).ready(function () {
            $("#tree").jstree({
                "plugins": ["wholerow"]
            });
        });
    });



