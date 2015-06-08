(function () {
    angular.module('tweety').factory('AuthService', AuthService);

    AuthService.$inject = ['$cookieStore'];

    function AuthService($cookieStore, $rootScope) {
        return {
            setLoginUser: function (accessToken) {
                $cookieStore.put('accessToken', accessToken);
            },

            isUserLoggedIn: function () {
                return $cookieStore.get('accessToken') !== undefined;
            },

            getAccessToken: function () {
                return $cookieStore.get('accessToken');
            }
        }

    }

})();
