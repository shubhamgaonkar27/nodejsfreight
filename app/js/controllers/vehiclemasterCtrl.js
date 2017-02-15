//for vehiclemaster.php


app.controller('VehicleMasterCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

  $scope.tabledata = {
    "count": 20,
    "data": [{
      "id": 1,
      "vehicletype": "Van"
    }, {
      "id": 2,
      "vehicletype": "Van"
    }, {
      "id": 3,
      "vehicletype": "Van"
    }, {
      "id": 4,
      "vehicletype": "Van"
    }, {
      "id": 5,
      "vehicletype": "Van"
    }, {
      "id": 6,
      "vehicletype": "Van"
    }, {
      "id": 7,
      "vehicletype": "Van"
    }, {
      "id": 8,
      "vehicletype": "Van"
    }, {
      "id": 9,
      "vehicletype": "Van"
    }, {
      "id": 10,
      "vehicletype": "Van"
    }, {
      "id": 11,
      "vehicletype": "Van"
    }, {
      "id": 12,
      "vehicletype": "Van"
    }, {
      "id": 13,
      "vehicletype": "Van"
    }, {
      "id": 14,
      "vehicletype": "Van"
    }, {
      "id": 15,
      "vehicletype": "Van"
    }, {
      "id": 16,
      "vehicletype": "Van"
    }, {
      "id": 17,
      "vehicletype": "Van"
    }, {
      "id": 18,
      "vehicletype": "Van"
    }, {
      "id": 19,
      "vehicletype": "Van"
    }, {
      "id": 20,
      "vehicletype": "Van"
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