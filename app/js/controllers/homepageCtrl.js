/// <reference path="../typings/tsd.d.ts" />
app.controller('HomepageCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    function removemask() {

        var myEl = angular.element(document.querySelector('.md-scroll-mask'));
        myEl.remove();
        console.log("removed");
    }

  
    $scope.toggleSidenav = function(menu) {
            $mdSidenav(menu).toggle();
        }

  
});



function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
}
