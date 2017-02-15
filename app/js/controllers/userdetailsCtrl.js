// from userdetail.php

app.controller('UserDetailsCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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
                templateUrl: 'template/userbookingview.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function() {
                removemask();
            }, function() {
                removemask();
            });
    };


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
            "bookingID": 85,
            "from": "Llorente",
            "to": "Tô Hạp",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 2,
            "bookingID": 8,
            "from": "Nihaona",
            "to": "Huifa",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 3,
            "bookingID": 93,
            "from": "Rozhdestveno",
            "to": "Dulolong",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 4,
            "bookingID": 68,
            "from": "Kiuteta",
            "to": "Gingsir",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 5,
            "bookingID": 96,
            "from": "Rogóźno",
            "to": "Tieli",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 6,
            "bookingID": 52,
            "from": "La Foa",
            "to": "Campoalegre",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 7,
            "bookingID": 67,
            "from": "Reshetikha",
            "to": "Nifuboko",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 8,
            "bookingID": 62,
            "from": "Ljig",
            "to": "Dongshan",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 9,
            "bookingID": 85,
            "from": "Taotang",
            "to": "Karangasem Laok",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 10,
            "bookingID": 45,
            "from": "Nowshahr",
            "to": "Žirovnica",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 11,
            "bookingID": 35,
            "from": "Dawan",
            "to": "Aranđelovac",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 12,
            "bookingID": 66,
            "from": "Xiabuji",
            "to": "Munjul",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 13,
            "bookingID": 98,
            "from": "Kolumbug",
            "to": "Vienna",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 14,
            "bookingID": 24,
            "from": "Daming",
            "to": "Papineauville",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 15,
            "bookingID": 16,
            "from": "Honghuatao",
            "to": "Gunungputri",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 16,
            "bookingID": 64,
            "from": "Palon",
            "to": "Dijon",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 17,
            "bookingID": 37,
            "from": "Hongmiao",
            "to": "Vardane",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Delivered"
        }, {
            "id": 18,
            "bookingID": 23,
            "from": "Gorodets",
            "to": "Kadubadak",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 19,
            "bookingID": 66,
            "from": "Tatuí",
            "to": "Grande Prairie",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }, {
            "id": 20,
            "bookingID": 98,
            "from": "Krujë",
            "to": "Hantang",
            "consignmentType": "Car",
            "bookingType": "Advance",
            "status": "Pickup"
        }]
    };

});

function BookingViewController($scope, $mdDialog) {
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