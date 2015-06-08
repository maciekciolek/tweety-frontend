(function () {
    angular.module('tweety.auth', ['tweety.core']);

    angular.module('tweety.auth').config(function ($stateProvider) {
        $stateProvider.state('auth', {
            url: '/auth',
            template: '<ui-view></ui-view>',
            abstract: true
        }).state('auth.login', {
            url: '/login',
            templateUrl: 'modules/auth/partial/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'vm'
        }).state('auth.register', {
            url: '/register/:accessToken',
            templateUrl: 'modules/auth/partial/register/register.html',
            controller: 'RegisterCtrl',
            controllerAs: 'vm'
        });
        /* Add New States Above */

    });


})();
