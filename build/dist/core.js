(function () {
    angular.module('tweety.core',
        [
            'ui.router',
            'pascalprecht.translate',
            'ngResource', 'facebook',
            'ngCookies',
            'ui.bootstrap',
            'http-auth-interceptor'
        ]
    );
})();
