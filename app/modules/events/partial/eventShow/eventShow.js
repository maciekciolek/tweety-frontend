(function () {

    angular.module('tweety.events').controller('EventShowCtrl', EventShowCtrl);

    EventShowCtrl.$inject = ['$stateParams', 'EventsService', '$modal', 'CommentsService', '$translate'];

    function EventShowCtrl($stateParams, EventsService, $modal, CommentsService, $translate) {
        var vm = this;
        var loadEvent = function(){
            EventsService.get({id: $stateParams.eventId}, function (response) {
                vm.event = response;
                var comments = _.groupBy(vm.comments, function (element, index) {
                    return Math.floor(index / 3);
                });
                vm.event.groupedComments = _.toArray(comments);

            });
        };

        loadEvent();

        vm.addComment = function () {
            $modal.open({
                templateUrl: 'modules/events/addComment/addComment.html',
                controller: 'AddCommentCtrl'
            }).result.then(function (result) {
                    var request = {
                        content: result.text,
                        event_id: vm.event.id
                    };

                    CommentsService.add(request, function(){
                        loadEvent();
                        BootstrapDialog.alert($translate.instant('events.show.comment.success'));
                    }, function(){
                        BootstrapDialog.alert($translate.instant('events.show.comment.error'));
                    });

                }
            );
        };



    }

})();

