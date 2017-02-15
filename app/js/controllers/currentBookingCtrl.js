//for driver_listing.php


app.controller('CurrentBookingListCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    function removemask() {

        var myEl = angular.element(document.querySelector('.md-scroll-mask'));
        myEl.remove();
        console.log("removed");
    }

    $scope.toggleSidenav = function(menu) {
        $mdSidenav(menu).toggle();
    };

    $scope.bookingViewDialog = function(ev) {

        $mdDialog.show({
                controller: BookingViewController,
                templateUrl: 'template/bookingrequestview.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                multiple: true,
                // bindToController: true,
                clickOutsideToClose: true,

                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function() {
                removemask();
            }, function() {
                removemask();
            });
    };


    $scope.filtersType = [{
        id: 1,
        value: 'First Notification Sent'
    }, {
        id: 2,
        value: 'Final Notification Sent'
    }, {
        id: 3,
        value: 'Pickup Initiated'
    }, {
        id: 4,
        value: 'Departed'
    }, {
        id: 5,
        value: 'Completed'
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
            "bookingID": 91,
            "regno": 8792,
            "driver_name": "Tina",
            "from_to": "Sydney-Perth",
            "status": "Pickup Initiated",
            "service": "Pallet Point to Point"
        }, {
            "id": 2,
            "bookingID": 29,
            "regno": 4613,
            "driver_name": "Alan",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 3,
            "bookingID": 83,
            "regno": 3553,
            "driver_name": "Gerald",
            "from_to": "Sydney-Perth",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 4,
            "bookingID": 57,
            "regno": 4269,
            "driver_name": "Juan",
            "from_to": "Canberra-Sydney",
            "status": "Final Notification",
            "service": "Pallet Point to Point"
        }, {
            "id": 5,
            "bookingID": 91,
            "regno": 9252,
            "driver_name": "Andrea",
            "from_to": "Sydney-Perth",
            "status": "Pickup Initiated",
            "service": "Pallet Point to Point"
        }, {
            "id": 6,
            "bookingID": 26,
            "regno": 9417,
            "driver_name": "Karen",
            "from_to": "Sydney-Perth",
            "status": "Pickup Initiated",
            "service": "Pallet Point to Point"
        }, {
            "id": 7,
            "bookingID": 33,
            "regno": 3740,
            "driver_name": "Alice",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Hourly"
        }, {
            "id": 8,
            "bookingID": 9,
            "regno": 8844,
            "driver_name": "Ruth",
            "from_to": "Sydney-Perth",
            "status": "Pickup Initiated",
            "service": "Pallet Point to Point"
        }, {
            "id": 9,
            "bookingID": 73,
            "regno": 3453,
            "driver_name": "Andrea",
            "from_to": "Canberra-Sydney",
            "status": "Pickup Initiated",
            "service": "Hourly"
        }, {
            "id": 10,
            "bookingID": 80,
            "regno": 8418,
            "driver_name": "Marilyn",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 11,
            "bookingID": 98,
            "regno": 1038,
            "driver_name": "Andrea",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Hourly"
        }, {
            "id": 12,
            "bookingID": 2,
            "regno": 5365,
            "driver_name": "Adam",
            "from_to": "Sydney-Perth",
            "status": "Pickup Initiated",
            "service": "Hourly"
        }, {
            "id": 13,
            "bookingID": 44,
            "regno": 7159,
            "driver_name": "Kathleen",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Hourly"
        }, {
            "id": 14,
            "bookingID": 84,
            "regno": 7278,
            "driver_name": "Ronald",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Hourly"
        }, {
            "id": 15,
            "bookingID": 93,
            "regno": 1611,
            "driver_name": "Ralph",
            "from_to": "Sydney-Perth",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 16,
            "bookingID": 67,
            "regno": 1421,
            "driver_name": "Bruce",
            "from_to": "Sydney-Perth",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 17,
            "bookingID": 21,
            "regno": 1189,
            "driver_name": "Paula",
            "from_to": "Canberra-Sydney",
            "status": "First Notification",
            "service": "Pallet Point to Point"
        }, {
            "id": 18,
            "bookingID": 42,
            "regno": 5185,
            "driver_name": "Andrea",
            "from_to": "Canberra-Sydney",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 19,
            "bookingID": 13,
            "regno": 3027,
            "driver_name": "Teresa",
            "from_to": "Sydney-Perth",
            "status": "Departed",
            "service": "Pallet Point to Point"
        }, {
            "id": 20,
            "bookingID": 85,
            "regno": 8162,
            "driver_name": "Julia",
            "from_to": "Canberra-Sydney",
            "status": "Pickup Initiated",
            "service": "Hourly"
        }]

    };

});

function BookingViewController($scope, $mdDialog, $mdMedia) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide();
    };


}




function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
}