app

    .controller('ProfileController', function ($scope) {
        $scope.sendEmail = function(email, subject, body){
            var link = "mailto:"+ email
                + "&subject=New email " + escape(subject);
            + "&body=" + escape(body);

            window.location.href = link;
        };
    });
