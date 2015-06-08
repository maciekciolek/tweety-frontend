(function () {

    angular.module('tweety').factory('ApplicationConfig', ApplicationConfig);

    function ApplicationConfig() {
        return {
            apiAddress: 'http://7ada2a0a.ngrok.io/api'
        }
    }

})();
