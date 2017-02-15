//for cancelledbooking.php


app.controller('CancelledBookingCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.cancelledbookingViewDialog = function(ev) {

        $mdDialog.show({
                controller: CancelledBookingViewController,
                templateUrl: 'template/cancelledbookingview.html',
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
            "bookingID": 5931,
            "from_to": "Canberra-Sydney",
            "username": "awatson0",
            "consignment_type": "Car"
        }, {
            "id": 2,
            "bookingID": 8771,
            "from_to": "Sydney-Perth",
            "username": "lwillis1",
            "consignment_type": "Car"
        }, {
            "id": 3,
            "bookingID": 3906,
            "from_to": "Sydney-Perth",
            "username": "bruiz2",
            "consignment_type": "Car"
        }, {
            "id": 4,
            "bookingID": 9197,
            "from_to": "Sydney-Perth",
            "username": "jriley3",
            "consignment_type": "Car"
        }, {
            "id": 5,
            "bookingID": 1476,
            "from_to": "Sydney-Perth",
            "username": "eellis4",
            "consignment_type": "Car"
        }, {
            "id": 6,
            "bookingID": 6078,
            "from_to": "Canberra-Sydney",
            "username": "khicks5",
            "consignment_type": "Car"
        }, {
            "id": 7,
            "bookingID": 5460,
            "from_to": "Sydney-Perth",
            "username": "cpeters6",
            "consignment_type": "Car"
        }, {
            "id": 8,
            "bookingID": 4260,
            "from_to": "Canberra-Sydney",
            "username": "hbanks7",
            "consignment_type": "Car"
        }, {
            "id": 9,
            "bookingID": 8258,
            "from_to": "Sydney-Perth",
            "username": "arichards8",
            "consignment_type": "Car"
        }, {
            "id": 10,
            "bookingID": 6304,
            "from_to": "Canberra-Sydney",
            "username": "rryan9",
            "consignment_type": "Car"
        }, {
            "id": 11,
            "bookingID": 4758,
            "from_to": "Sydney-Perth",
            "username": "wrileya",
            "consignment_type": "Car"
        }, {
            "id": 12,
            "bookingID": 339,
            "from_to": "Sydney-Perth",
            "username": "arichardsonb",
            "consignment_type": "Car"
        }, {
            "id": 13,
            "bookingID": 5267,
            "from_to": "Canberra-Sydney",
            "username": "karmstrongc",
            "consignment_type": "Car"
        }, {
            "id": 14,
            "bookingID": 3771,
            "from_to": "Sydney-Perth",
            "username": "cthompsond",
            "consignment_type": "Car"
        }, {
            "id": 15,
            "bookingID": 3211,
            "from_to": "Sydney-Perth",
            "username": "jpattersone",
            "consignment_type": "Car"
        }, {
            "id": 16,
            "bookingID": 8389,
            "from_to": "Sydney-Perth",
            "username": "rnguyenf",
            "consignment_type": "Car"
        }, {
            "id": 17,
            "bookingID": 9765,
            "from_to": "Sydney-Perth",
            "username": "cpierceg",
            "consignment_type": "Car"
        }, {
            "id": 18,
            "bookingID": 8154,
            "from_to": "Canberra-Sydney",
            "username": "kcarterh",
            "consignment_type": "Car"
        }, {
            "id": 19,
            "bookingID": 4191,
            "from_to": "Sydney-Perth",
            "username": "emitchelli",
            "consignment_type": "Car"
        }, {
            "id": 20,
            "bookingID": 8900,
            "from_to": "Canberra-Sydney",
            "username": "adixonj",
            "consignment_type": "Car"
        }]
    };

});

function CancelledBookingViewController($scope, $mdDialog, $mdMedia) {
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