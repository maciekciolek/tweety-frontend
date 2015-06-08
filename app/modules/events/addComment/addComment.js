angular.module('tweety.events').controller('AddCommentCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {

    $scope.addComment = function () {
        $modalInstance.close({text: $scope.text})
    }


}]);
