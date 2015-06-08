(function () {
    angular.module('tweety.auth').controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['Facebook', 'authService', 'UsersService', '$state'];

    function LoginCtrl(Facebook, authService, UsersService, $state) {
        var vm = this;
        vm.success = false;

        vm.login = function () {
            Facebook.login(function (response) {
                var accessToken = response.authResponse.accessToken;

                UsersService.validate({access_token: accessToken}, function (response) {
                    authService.loginConfirmed({accessToken: accessToken, userType: response.user_type});
                    vm.success = true;
                }, function (error) {
                    if (error.status == 404) {
                        $state.go('auth.register', {accessToken: accessToken});
                    }
                });
            });
        };

    }
})();


