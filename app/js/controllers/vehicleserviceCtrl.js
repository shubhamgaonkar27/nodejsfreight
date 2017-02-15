//for vehicleservice.php


app.controller('VehicleServiceCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

  



  // $scope.filtersType = [{
  //     id: 1,
  //     value: 'Delivered'
  // }, {
  //     id: 2,
  //     value: 'Cancelled Request'
  // }];

  

 
});



function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}