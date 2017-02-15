//for services.php


app.controller('ServicesCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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
      .title('Would you like to delete the service?')
      .textContent('Service once deleted cannot be recovered')
      
      .targetEvent(ev)
      .ok('YES')
      .cancel('NO');

    $mdDialog.show(confirm).then(function () {
      removemask();
    }, function () {
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

  $scope.tabledata = {
    "count": 20,
    "data": [{
      "id": 1,
      "service_name": "Service Name",
      "rate": 73
    }, {
      "id": 2,
      "service_name": "Service Name",
      "rate": 79
    }, {
      "id": 3,
      "service_name": "Service Name",
      "rate": 48
    }, {
      "id": 4,
      "service_name": "Service Name",
      "rate": 46
    }, {
      "id": 5,
      "service_name": "Service Name",
      "rate": 84
    }, {
      "id": 6,
      "service_name": "Service Name",
      "rate": 90
    }, {
      "id": 7,
      "service_name": "Service Name",
      "rate": 61
    }, {
      "id": 8,
      "service_name": "Service Name",
      "rate": 12
    }, {
      "id": 9,
      "service_name": "Service Name",
      "rate": 27
    }, {
      "id": 10,
      "service_name": "Service Name",
      "rate": 34
    }, {
      "id": 11,
      "service_name": "Service Name",
      "rate": 87
    }, {
      "id": 12,
      "service_name": "Service Name",
      "rate": 50
    }, {
      "id": 13,
      "service_name": "Service Name",
      "rate": 19
    }, {
      "id": 14,
      "service_name": "Service Name",
      "rate": 62
    }, {
      "id": 15,
      "service_name": "Service Name",
      "rate": 56
    }, {
      "id": 16,
      "service_name": "Service Name",
      "rate": 84
    }, {
      "id": 17,
      "service_name": "Service Name",
      "rate": 36
    }, {
      "id": 18,
      "service_name": "Service Name",
      "rate": 16
    }, {
      "id": 19,
      "service_name": "Service Name",
      "rate": 83
    }, {
      "id": 20,
      "service_name": "Service Name",
      "rate": 44
    }]
  };

});

function CancelledBookingViewController($scope, $mdDialog, $mdMedia) {
  $scope.hide = function () {
    $mdDialog.hide();
  };

  $scope.cancel = function () {
    $mdDialog.cancel();
  };

  $scope.answer = function () {
    $mdDialog.hide();
  };


}




function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}