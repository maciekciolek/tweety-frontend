(function () {
    angular.module('tweety.events', ['tweety.core']);


    angular.module('tweety.events').config(function ($stateProvider) {

        $stateProvider.state('events', {
            url: '/events',
            template: '<ui-view></ui-view>',
            abstract: true
        }).state('events.create', {
            url: '/create',
            templateUrl: 'modules/events/partial/eventCreate/eventCreate.html',
            controller: 'EventCreateCtrl',
            controllerAs: 'vm'
        }).state('events.list', {
            url: '/list',
            templateUrl: 'modules/events/partial/eventList/eventList.html',
            controller: 'EventListCtrl',
            controllerAs: 'vm'
        }).state('events.show', {
            url: '/show/:eventId',
            templateUrl: 'modules/events/partial/eventShow/eventShow.html',
            controller: 'EventShowCtrl',
            controllerAs: 'vm'
        });
        /* Add New States Above */

    });

})();
