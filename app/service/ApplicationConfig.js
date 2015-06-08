(function () {

    angular.module('tweety').factory('ApplicationConfig', ApplicationConfig);

    function ApplicationConfig() {
        return {
            apiAddress: '/api'
        }
    }

})();
