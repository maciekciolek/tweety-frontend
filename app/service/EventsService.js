(function () {
    angular.module('tweety').factory('EventsService', EventsService);

    EventsService.$inject = ['$resource', 'ApplicationConfig'];

    function EventsService($resource, ApplicationConfig) {
        return $resource(ApplicationConfig.apiAddress + "/events/:id", {}, {
            list: {
                isArray: false,
                method: 'GET'
            },
            get: {
                method: 'GET',
                isArray: false
            },
            create: {
                method: 'POST',
                isArray: false
            }
        })
    }
})();
