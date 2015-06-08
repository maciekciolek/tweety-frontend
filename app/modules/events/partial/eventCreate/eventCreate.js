(function () {
    angular.module('tweety.events').controller('EventCreateCtrl', EventCreate);

    EventCreate.$inject = ['EventsService'];

    function EventCreate(EventsService) {
        var vm = this;
        vm.success = false;
        vm.error = false;

        vm.createEvent = function () {
            vm.success = false;
            vm.error = false;

            EventsService.create(vm.event, function (response) {
                vm.success = true;
            }, function (response) {
                vm.error = response.data.error;
            })
        }
    }
})();
