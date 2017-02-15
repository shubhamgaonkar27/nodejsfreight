//for viewallvehicles.php


app.controller('ViewAllVehiclesCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.driverViewDialog = function (ev) {

        $mdDialog.show({
                controller: DriverViewController,
                templateUrl: 'template/driverview.php',
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

    $scope.filtersType = [{ id: 1, value: 'Truck' }, { id: 2, value: 'Van' }, { id: 3, value: 'MiniVan' }];

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
  "vehicle_name": "Suzuki",
  "reg_no": 2684,
  "type": "Truck",
  "driver_name": "Roger",
  "status": "Accepted"
}, {
  "id": 2,
  "vehicle_name": "Tata",
  "reg_no": 2062,
  "type": "Trailer",
  "driver_name": "Earl",
  "status": "Rejected"
}, {
  "id": 3,
  "vehicle_name": "Honda",
  "reg_no": 7401,
  "type": "Truck",
  "driver_name": "Carlos",
  "status": "Pending"
}, {
  "id": 4,
  "vehicle_name": "Mercedes",
  "reg_no": 780,
  "type": "Truck",
  "driver_name": "Matthew",
  "status": "Pending"
}, {
  "id": 5,
  "vehicle_name": "Tata",
  "reg_no": 7008,
  "type": "Trailer",
  "driver_name": "Donna",
  "status": "Rejected"
}, {
  "id": 6,
  "vehicle_name": "Scania",
  "reg_no": 4870,
  "type": "Minivan",
  "driver_name": "Matthew",
  "status": "Pending"
}, {
  "id": 7,
  "vehicle_name": "Tata",
  "reg_no": 3581,
  "type": "Truck",
  "driver_name": "Brian",
  "status": "Accepted"
}, {
  "id": 8,
  "vehicle_name": "Mercedes",
  "reg_no": 6901,
  "type": "Van",
  "driver_name": "Andrew",
  "status": "Rejected"
}, {
  "id": 9,
  "vehicle_name": "Tata",
  "reg_no": 5702,
  "type": "Minivan",
  "driver_name": "Jeffrey",
  "status": "Pending"
}, {
  "id": 10,
  "vehicle_name": "Mercedes",
  "reg_no": 8533,
  "type": "Trailer",
  "driver_name": "Nicholas",
  "status": "Rejected"
}, {
  "id": 11,
  "vehicle_name": "Tata",
  "reg_no": 8303,
  "type": "Trailer",
  "driver_name": "Evelyn",
  "status": "Rejected"
}, {
  "id": 12,
  "vehicle_name": "Tata",
  "reg_no": 3902,
  "type": "Minivan",
  "driver_name": "Carlos",
  "status": "Accepted"
}, {
  "id": 13,
  "vehicle_name": "Tata",
  "reg_no": 6122,
  "type": "Minivan",
  "driver_name": "Joshua",
  "status": "Rejected"
}, {
  "id": 14,
  "vehicle_name": "Honda",
  "reg_no": 5527,
  "type": "Trailer",
  "driver_name": "Rose",
  "status": "Pending"
}, {
  "id": 15,
  "vehicle_name": "Honda",
  "reg_no": 4039,
  "type": "Minivan",
  "driver_name": "Anne",
  "status": "Pending"
}, {
  "id": 16,
  "vehicle_name": "Tata",
  "reg_no": 8404,
  "type": "Minivan",
  "driver_name": "Tammy",
  "status": "Rejected"
}, {
  "id": 17,
  "vehicle_name": "Tata",
  "reg_no": 1472,
  "type": "Van",
  "driver_name": "Anne",
  "status": "Pending"
}, {
  "id": 18,
  "vehicle_name": "Honda",
  "reg_no": 9267,
  "type": "Truck",
  "driver_name": "Russell",
  "status": "Rejected"
}, {
  "id": 19,
  "vehicle_name": "Tata",
  "reg_no": 2428,
  "type": "Van",
  "driver_name": "Rose",
  "status": "Accepted"
}, {
  "id": 20,
  "vehicle_name": "Honda",
  "reg_no": 6203,
  "type": "Van",
  "driver_name": "Jane",
  "status": "Accepted"
}]
    };

});

function DriverViewController($scope, $mdDialog, $mdMedia) {
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