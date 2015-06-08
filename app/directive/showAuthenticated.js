angular.module('tweety').directive('showAuthenticated', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, fn) {
            var refresh = function(){
                if (scope.loggedIn === true) {
                    $(element).show();
                } else {
                    $(element).hide();
                }
            };

            refresh();

            scope.$on('event:auth-loginConfirmed', refresh)

        }

    };
});
