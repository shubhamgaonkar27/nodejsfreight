//for viewallvehicles.php


app.controller('ViewAllDriversCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.filtersStatus = [{
        id: 1,
        value: 'Pending'
    }, {
        id: 2,
        value: 'Complete'
    }];
    $scope.filtersAvailability = [{
        id: 1,
        value: 'Online'
    }, {
        id: 2,
        value: 'Offline'
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
            "driver_name": "Matthew",
            "acceptedTripCount": 33,
            "availability": "online",
            "status": "complete"
        }, {
            "id": 2,
            "driver_name": "Cheryl",
            "acceptedTripCount": 24,
            "availability": "offline",
            "status": "pending"
        }, {
            "id": 3,
            "driver_name": "Amy",
            "acceptedTripCount": 62,
            "availability": "online",
            "status": "complete"
        }, {
            "id": 4,
            "driver_name": "Deborah",
            "acceptedTripCount": 50,
            "availability": "offline",
            "status": "pending"
        }, {
            "id": 5,
            "driver_name": "Paul",
            "acceptedTripCount": 46,
            "availability": "online",
            "status": "pending"
        }, {
            "id": 6,
            "driver_name": "Marilyn",
            "acceptedTripCount": 91,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 7,
            "driver_name": "Johnny",
            "acceptedTripCount": 83,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 8,
            "driver_name": "Norma",
            "acceptedTripCount": 41,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 9,
            "driver_name": "Teresa",
            "acceptedTripCount": 83,
            "availability": "online",
            "status": "complete"
        }, {
            "id": 10,
            "driver_name": "Samuel",
            "acceptedTripCount": 60,
            "availability": "online",
            "status": "complete"
        }, {
            "id": 11,
            "driver_name": "Deborah",
            "acceptedTripCount": 54,
            "availability": "online",
            "status": "pending"
        }, {
            "id": 12,
            "driver_name": "Beverly",
            "acceptedTripCount": 7,
            "availability": "online",
            "status": "pending"
        }, {
            "id": 13,
            "driver_name": "Mark",
            "acceptedTripCount": 74,
            "availability": "online",
            "status": "complete"
        }, {
            "id": 14,
            "driver_name": "Brian",
            "acceptedTripCount": 8,
            "availability": "online",
            "status": "pending"
        }, {
            "id": 15,
            "driver_name": "Richard",
            "acceptedTripCount": 95,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 16,
            "driver_name": "Jesse",
            "acceptedTripCount": 11,
            "availability": "online",
            "status": "pending"
        }, {
            "id": 17,
            "driver_name": "Michelle",
            "acceptedTripCount": 64,
            "availability": "offline",
            "status": "pending"
        }, {
            "id": 18,
            "driver_name": "Johnny",
            "acceptedTripCount": 45,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 19,
            "driver_name": "Fred",
            "acceptedTripCount": 40,
            "availability": "offline",
            "status": "complete"
        }, {
            "id": 20,
            "driver_name": "Marie",
            "acceptedTripCount": 98,
            "availability": "offline",
            "status": "complete"
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