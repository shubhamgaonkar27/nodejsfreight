//for documentmaster.php


app.controller('DocumentMasterCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

  $scope.showDeleteConfirm = function (ev) {

    var confirm = $mdDialog.confirm()
      .title('Would you like to delete the file?')
      .textContent('File once deleted cannot be recovered')

    .targetEvent(ev)
      .ok('YES')
      .cancel('NO');

    $mdDialog.show(confirm).then(function () {
      removemask();
    }, function () {
      removemask();
    });
  };
  
  // $scope.togle = function (param) {
  //   console.log(param);
  //   if (!param) {

  //     $cope.active=true;
  //   }
  //   else {
  //      $cope.active=false;
  //   }
  // };
  



  // $scope.filtersType = [{
  //     id: 1,
  //     value: 'Delivered'
  // }, {
  //     id: 2,
  //     value: 'Cancelled Request'
  // }];

  $scope.services = [{
    "id": 1,
    "service_name": "Service Name"
  }, {
    "id": 2,
    "service_name": "Service Name"
  }, {
    "id": 3,
    "service_name": "Service Name"
  }, {
    "id": 4,
    "service_name": "Service Name"
  }, {
    "id": 5,
    "service_name": "Service Name"
  }, {
    "id": 6,
    "service_name": "Service Name"
  }, {
    "id": 7,
    "service_name": "Service Name"
  }];

  $scope.limitOptions = [5, 10, 15, 20];
  $scope.query = {
    order: 'id',
    limit: 10,
    page: 1
  };

 
});





function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}