(function () {
    angular.module('tweety').factory('UsersService', UsersService);

    UsersService.$inject = ['$resource', 'ApplicationConfig'];

    function UsersService($resource, ApplicationConfig) {
        return $resource(ApplicationConfig.apiAddress + "/users/:type", {}, {
            validate: {
                isArray: false,
                method: 'GET',
                params: {
                    type: 'validate'
                }
            },
            register: {
                isArray: false,
                method: 'POST'
            }
        })
    }
})();
