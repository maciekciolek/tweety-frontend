(function () {
    angular.module('tweety.auth').controller('RegisterCtrl', RegisterCtrl);

    RegisterCtrl.$inject = ['$translate', 'UsersService', '$stateParams', 'authService'];

    function RegisterCtrl($translate, UsersService, $stateParams, authService) {
        var vm = this;
        vm.errors = [];
        vm.success = false;

        vm.registerData = {
            type: 'commenter',
            login: '',
            access_token: $stateParams.accessToken
        };

        vm.types = [{
            type: 'commenter',
            translation: 'auth.register.commenter'
        }, {
            type: 'creator',
            translation: 'auth.register.creator'
        }];

        vm.register = function () {
            vm.errors = [];

            UsersService.register({user: vm.registerData}, function (response) {
                authService.loginConfirmed({accessToken: $stateParams.accessToken, userType: vm.registerData.type});
                vm.success = true;
            }, function (error) {
                if (error.status == 422) {
                    vm.errors = error.data.errors;
                }
            })
        };

        _.each(vm.types, function (obj) {
            obj.translation = $translate.instant(obj.translation)
        })
    }

})();
