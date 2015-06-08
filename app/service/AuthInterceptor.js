(function () {
    angular.module('tweety').factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['$cookieStore'];

    function AuthInterceptor($cookieStore) {
        return {
            request: function (config) {
                if (config != undefined) {
                    var token = $cookieStore.get('accessToken');
                    if (token != undefined) {
                        config.headers['X-Access-Token'] = token;
                    }
                }
                return config;
            }
        }
    }

})();
