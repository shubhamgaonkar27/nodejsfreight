// for company driver details 

app.controller('CompanyDriverDetailsCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
  // $scope.doc1Status = '';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


  function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
  }

  $scope.toggleSidenav = function (menu) {
    $mdSidenav(menu).toggle();
  };

  $scope.driverTripDialog = function (ev) {

    $mdDialog.show({
        controller: DriverTripController,
        templateUrl: 'template/drivertrip.php',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
      .then(function () {
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
      .then(function (res) {
        $scope.doc1Status = res;
        removemask();
      }, function () {
        removemask();
      });
  };


  $scope.userDocuments = [{
    "id": 1,
    "name": "Doc",
    "status": "PENDING"
  }, {
    "id": 2,
    "name": "Doc",
    "status": "ACCEPTED"
  }, {
    "id": 3,
    "name": "Doc",
    "status": "REJECTED"
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
      "customername": "Kevin",
      "bookingId": 15,
      "driverName": "Adam",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 2,
      "customername": "John",
      "bookingId": 17,
      "driverName": "Russell",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 3,
      "customername": "William",
      "bookingId": 27,
      "driverName": "Ryan",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 4,
      "customername": "Brian",
      "bookingId": 71,
      "driverName": "Samuel",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 5,
      "customername": "Jimmy",
      "bookingId": 45,
      "driverName": "Anthony",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 6,
      "customername": "Jeremy",
      "bookingId": 56,
      "driverName": "Bonnie",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 7,
      "customername": "Jesse",
      "bookingId": 72,
      "driverName": "Martin",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 8,
      "customername": "Frank",
      "bookingId": 47,
      "driverName": "Phillip",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 9,
      "customername": "David",
      "bookingId": 12,
      "driverName": "Catherine",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 10,
      "customername": "Howard",
      "bookingId": 24,
      "driverName": "Margaret",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 11,
      "customername": "Nicholas",
      "bookingId": 87,
      "driverName": "Jacqueline",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 12,
      "customername": "Michael",
      "bookingId": 93,
      "driverName": "Henry",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 13,
      "customername": "Edward",
      "bookingId": 4,
      "driverName": "Johnny",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }, {
      "id": 14,
      "customername": "Henry",
      "bookingId": 63,
      "driverName": "Kelly",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 15,
      "customername": "Paul",
      "bookingId": 29,
      "driverName": "Carl",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 16,
      "customername": "Clarence",
      "bookingId": 41,
      "driverName": "Raymond",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 17,
      "customername": "Russell",
      "bookingId": 79,
      "driverName": "Sarah",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 18,
      "customername": "Harold",
      "bookingId": 49,
      "driverName": "Keith",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 19,
      "customername": "Arthur",
      "bookingId": 78,
      "driverName": "Carlos",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Rejected"
    }, {
      "id": 20,
      "customername": "Frank",
      "bookingId": 43,
      "driverName": "Charles",
      "fromTo": "Margoa-Panjim",
      "consignment": "Car",
      "multipleStopConsignment": "Nil",
      "status": "Accepted"
    }]
  };

});

function DriverTripController($scope, $mdDialog) {
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

function DocumentViewController($scope, $mdDialog, $mdMedia) {
  $scope.hide = function (res) {
    $mdDialog.hide(res);
  };

  $scope.cancel = function () {
    $mdDialog.cancel();
  };

};




function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}