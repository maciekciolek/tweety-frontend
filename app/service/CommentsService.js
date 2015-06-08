(function () {
    angular.module('tweety').factory('CommentsService', CommentsService);


    CommentsService.$inject = ['$resource', 'ApplicationConfig'];

    function CommentsService($resource, ApplicationConfig) {
        return $resource(ApplicationConfig.apiAddress + "/comments/:id", {}, {
            add: {
                isArray: false,
                method: 'POST'
            }
        })
    }
})();
