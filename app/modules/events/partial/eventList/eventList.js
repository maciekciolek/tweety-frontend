(function () {
    angular.module('tweety.events').controller('EventListCtrl', EventListCtrl);

    EventListCtrl.$inject = ['EventsService'];

    function EventListCtrl(EventsService) {
        var vm = this;

        EventsService.list(function (response) {
            vm.events = response.events;
        });
    }
})();
