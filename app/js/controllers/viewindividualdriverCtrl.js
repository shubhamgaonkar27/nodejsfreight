//for viewindividualdriver.php


app.controller('ViewIndividualDriverCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    function removemask() {

        var myEl = angular.element(document.querySelector('.md-scroll-mask'));
        myEl.remove();
        console.log("removed");
    }

    $scope.toggleSidenav = function(menu) {
        $mdSidenav(menu).toggle();

    };

    $scope.viewAttachment = function(ev) {

        $mdDialog.show({
                controller: DocumentViewController,
                templateUrl: 'template/companyattachment.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                multiple: true,
                // bindToController: true,
                clickOutsideToClose: true,

                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function() {
                removemask();
            }, function() {
                removemask();
            });
    };






    // $scope.filtersType = [{
    //     id: 1,
    //     value: 'Delivered'
    // }, {
    //     id: 2,
    //     value: 'Cancelled Request'
    // }];

    $scope.limitOptions = [5, 10, 15, 20];
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };



});

function DocumentViewController($scope, $mdDialog, $mdMedia) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide();
    };

};




function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
}