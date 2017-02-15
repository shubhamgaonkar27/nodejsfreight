app.controller('DriverTripDetailsCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.driverTripDialog = function(ev) {

        $mdDialog.show({
                controller: DriverTripController,
                templateUrl: 'template/drivertrip.html',
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
            "pickupdate": "16/02/2016",
            "reg_no": 27262,
            "from": "Cabannungan Second",
            "to": "Koson Shahri",
            "distance": 183,
            "status": "Pick Up"
        }, {
            "id": 2,
            "pickupdate": "20/03/2016",
            "reg_no": 84930,
            "from": "Proletarsk",
            "to": "Guadalupe Victoria",
            "distance": 161,
            "status": "Pick Up"
        }, {
            "id": 3,
            "pickupdate": "03/12/2015",
            "reg_no": 88840,
            "from": "Fengjiang",
            "to": "Mavingouni",
            "distance": 23,
            "status": "Pick Up"
        }, {
            "id": 4,
            "pickupdate": "04/01/2016",
            "reg_no": 71526,
            "from": "Mambi",
            "to": "Danchang",
            "distance": 347,
            "status": "Pick Up"
        }, {
            "id": 5,
            "pickupdate": "22/09/2016",
            "reg_no": 66664,
            "from": "Bayan",
            "to": "San Isidro",
            "distance": 522,
            "status": "Delivered"
        }, {
            "id": 6,
            "pickupdate": "26/10/2016",
            "reg_no": 42677,
            "from": "Tongguan",
            "to": "Āshtīān",
            "distance": 119,
            "status": "Delivered"
        }, {
            "id": 7,
            "pickupdate": "28/07/2016",
            "reg_no": 59661,
            "from": "Lamont",
            "to": "Sidi Bouzid",
            "distance": 723,
            "status": "Delivered"
        }, {
            "id": 8,
            "pickupdate": "01/04/2016",
            "reg_no": 57236,
            "from": "Lambton Shores",
            "to": "Kuala Lumpur",
            "distance": 196,
            "status": "Pick Up"
        }, {
            "id": 9,
            "pickupdate": "27/06/2016",
            "reg_no": 38528,
            "from": "Issy-les-Moulineaux",
            "to": "San Vicente Centenario",
            "distance": 438,
            "status": "Pick Up"
        }, {
            "id": 10,
            "pickupdate": "01/10/2016",
            "reg_no": 14832,
            "from": "Tandag",
            "to": "Sofifi",
            "distance": 669,
            "status": "Pick Up"
        }, {
            "id": 11,
            "pickupdate": "02/11/2016",
            "reg_no": 71175,
            "from": "Los Rastrojos",
            "to": "San Vicente Centenario",
            "distance": 674,
            "status": "Delivered"
        }, {
            "id": 12,
            "pickupdate": "22/06/2016",
            "reg_no": 22625,
            "from": "Kuningan",
            "to": "Kuvshinovo",
            "distance": 49,
            "status": "Delivered"
        }, {
            "id": 13,
            "pickupdate": "16/07/2016",
            "reg_no": 67709,
            "from": "Parychy",
            "to": "Bankim",
            "distance": 670,
            "status": "Pick Up"
        }, {
            "id": 14,
            "pickupdate": "08/07/2016",
            "reg_no": 62694,
            "from": "Zuogaimanma",
            "to": "Satte",
            "distance": 543,
            "status": "Pick Up"
        }, {
            "id": 15,
            "pickupdate": "11/08/2016",
            "reg_no": 19330,
            "from": "Ban Na San",
            "to": "Otwock",
            "distance": 701,
            "status": "Delivered"
        }, {
            "id": 16,
            "pickupdate": "03/08/2016",
            "reg_no": 68240,
            "from": "Guilhabreu",
            "to": "Bussum",
            "distance": 52,
            "status": "Pick Up"
        }, {
            "id": 17,
            "pickupdate": "15/09/2016",
            "reg_no": 72033,
            "from": "Nawal",
            "to": "Dafengdui",
            "distance": 793,
            "status": "Delivered"
        }, {
            "id": 18,
            "pickupdate": "06/03/2016",
            "reg_no": 20372,
            "from": "Abuochiche",
            "to": "Maple Plain",
            "distance": 664,
            "status": "Pick Up"
        }, {
            "id": 19,
            "pickupdate": "21/04/2016",
            "reg_no": 72570,
            "from": "Växjö",
            "to": "Gubu",
            "distance": 11,
            "status": "Delivered"
        }, {
            "id": 20,
            "pickupdate": "29/09/2016",
            "reg_no": 30925,
            "from": "Danville",
            "to": "Pasembon",
            "distance": 13,
            "status": "Pick Up"
        }]
    };

});

function DriverTripController($scope, $mdDialog) {
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