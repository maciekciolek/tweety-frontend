(function () {
    angular.module('tweety', ['tweety.core', 'tweety.events', 'tweety.auth']);

    angular.module('tweety').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, FacebookProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });


        /* Add New States Above */
        $urlRouterProvider.otherwise('/');

        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_EN');


        FacebookProvider.setSdkVersion('v2.3');
        FacebookProvider.init('1431313060510842');

        $httpProvider.interceptors.push('AuthInterceptor');

    });

    angular.module('tweety').run(function ($rootScope, AuthService, $state, UsersService, authService) {
        if (AuthService.isUserLoggedIn() === true) {
            UsersService.validate({access_token: AuthService.getAccessToken()}, function (response) {
                authService.loginConfirmed({accessToken: AuthService.getAccessToken(), userType: response.user_type});
            })
        }

        $rootScope.$on('event:auth-loginConfirmed', function (event, data) {
            $rootScope.loggedIn = true;
            $rootScope.userType = data.userType;

            AuthService.setLoginUser(data.accessToken);
        });

        $rootScope.$on('event:auth-loginRequired', function () {
            $state.go('auth.login');
        });

        $rootScope.$on('event:auth-forbidden', function () {
            $state.go('auth.login');
        });


        $rootScope.safeApply = function (fn) {
            var phase = $rootScope.$$phase;
            if (phase === '$apply' || phase === '$digest') {
                if (fn && (typeof(fn) === 'function')) {
                    fn();
                }
            } else {
                this.$apply(fn);
            }
        };

    });

})();
