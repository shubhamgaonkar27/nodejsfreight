//for driver_listing.php


app.controller('DriverListCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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


 $scope.filtersType = [{ id: 1, value: 'Pending' }, { id: 2, value: 'Complete' }];

    $scope.limitOptions = [5, 10, 15, 20];
    $scope.query = {
        order: 'id',
        limit: 10,
        page: 1
    };

    $scope.tabledata = {
        "count": 20,
        "data":  [{
            "id": 1,
            "name": "James",
            "reg_no": 39437,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 2,
            "name": "Scott",
            "reg_no": 90521,
            "availabilty": 'offline',
            "status": "complete"
        }, {
            "id": 3,
            "name": "Keith",
            "reg_no": 54914,
            "availabilty": 'online',
            "status": "complete"
        }, {
            "id": 4,
            "name": "Robin",
            "reg_no": 52427,
            "availabilty": 'offline',
            "status": "pending"
        }, {
            "id": 5,
            "name": "Thomas",
            "reg_no": 70041,
            "availabilty": 'offline',
            "status": "complete"
        }, {
            "id": 6,
            "name": "Sandra",
            "reg_no": 55744,
            "availabilty": 'online',
            "status": "complete"
        }, {
            "id": 7,
            "name": "Patrick",
            "reg_no": 62684,
            "availabilty": 'offline',
            "status": "pending"
        }, {
            "id": 8,
            "name": "Brenda",
            "reg_no": 58942,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 9,
            "name": "Nicholas",
            "reg_no": 51707,
            "availabilty": 'offline',
            "status": "complete"
        }, {
            "id": 10,
            "name": "Cheryl",
            "reg_no": 70834,
            "availabilty": 'offline',
            "status": "pending"
        }, {
            "id": 11,
            "name": "Craig",
            "reg_no": 82386,
            "availabilty": 'online',
            "status": "complete"
        }, {
            "id": 12,
            "name": "Wayne",
            "reg_no": 44975,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 13,
            "name": "Carolyn",
            "reg_no": 72903,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 14,
            "name": "Rebecca",
            "reg_no": 81270,
            "availabilty": 'offline',
            "status": "pending"
        }, {
            "id": 15,
            "name": "Kelly",
            "reg_no": 99328,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 16,
            "name": "Ryan",
            "reg_no": 51744,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 17,
            "name": "Maria",
            "reg_no": 37067,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 18,
            "name": "Rebecca",
            "reg_no": 62119,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 19,
            "name": "John",
            "reg_no": 23959,
            "availabilty": 'online',
            "status": "pending"
        }, {
            "id": 20,
            "name": "Julie",
            "reg_no": 86192,
            "availabilty": 'online',
            "status": "pending"
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