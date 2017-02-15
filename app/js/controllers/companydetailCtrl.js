//for companydetail.php


app.controller('CompanyDetailCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


  function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
  }

  $scope.toggleSidenav = function (menu) {
    $mdSidenav(menu).toggle();
  };

  $scope.companyRejectDialog = function (ev) {
    var confirm = $mdDialog.prompt()
      .title('Reject this Company')
      .textContent('Reason for rejection')
      .targetEvent(ev)
      .ok('send')
      .cancel('cancel');

    $mdDialog.show(confirm).then(function (result) {
      removemask();
    }, function () {
      removemask();
    });
  };

      $scope.viewAttachment = function (ev) {

        $mdDialog.show({
                controller: DocumentViewController,
                templateUrl: 'template/companyattachment.php',
                parent: angular.element(document.body),
                targetEvent: ev,
                multiple: true,
                // bindToController: true,
                clickOutsideToClose: true,

                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function () {
                removemask();
            }, function () {
                removemask();
            });
    };

  


 

  

});

function DocumentViewController($scope, $mdDialog,$mdMedia) {
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function () {
        $mdDialog.hide();
    };

};




function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}