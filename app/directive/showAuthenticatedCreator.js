angular.module('tweety').directive('showAuthenticatedCreator', function() {
	return {
        link: function (scope, element, attrs, fn) {
            var refresh = function(){
                if (scope.loggedIn === true && scope.userType === 'creator') {
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
