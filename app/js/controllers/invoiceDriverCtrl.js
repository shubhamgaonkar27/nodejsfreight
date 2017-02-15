//for invoiceDriver.php


app.controller('InvoiceDriverCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.openInvoice = function(type, ev) {

        if (type == "Generated") {
            invoiceDriverGENViewDialog(ev);
        } else if (type == "Pending") {
            invoiceDriverPENViewDialog(ev);
        }
    };


    invoiceDriverGENViewDialog = function(ev) {
        $mdDialog.show({
                controller: DriverInvoiceGENViewController,
                templateUrl: 'template/driverinvoiceGENview.html',
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

    invoiceDriverPENViewDialog = function(ev) {
        $mdDialog.show({
                controller: DriverInvoicePENViewController,
                templateUrl: 'template/driverinvoicePENview.php',
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
        value: 'Pending'
    }, {
        id: 2,
        value: 'Generated'
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
            "bookingID": 74,
            "invoicenumber": 65,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 51
        }, {
            "id": 2,
            "bookingID": 75,
            "invoicenumber": 56,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 11
        }, {
            "id": 3,
            "bookingID": 67,
            "invoicenumber": 87,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 50
        }, {
            "id": 4,
            "bookingID": 80,
            "invoicenumber": 24,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 59
        }, {
            "id": 5,
            "bookingID": 61,
            "invoicenumber": 43,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 18
        }, {
            "id": 6,
            "bookingID": 68,
            "invoicenumber": 44,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 24
        }, {
            "id": 7,
            "bookingID": 1,
            "invoicenumber": 99,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 41
        }, {
            "id": 8,
            "bookingID": 30,
            "invoicenumber": 89,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 50
        }, {
            "id": 9,
            "bookingID": 67,
            "invoicenumber": 2,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 71
        }, {
            "id": 10,
            "bookingID": 16,
            "invoicenumber": 11,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 52
        }, {
            "id": 11,
            "bookingID": 25,
            "invoicenumber": 30,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 32
        }, {
            "id": 12,
            "bookingID": 14,
            "invoicenumber": 96,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 19
        }, {
            "id": 13,
            "bookingID": 52,
            "invoicenumber": 14,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 70
        }, {
            "id": 14,
            "bookingID": 47,
            "invoicenumber": 72,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 66
        }, {
            "id": 15,
            "bookingID": 2,
            "invoicenumber": 7,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 85
        }, {
            "id": 16,
            "bookingID": 72,
            "invoicenumber": 16,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 70
        }, {
            "id": 17,
            "bookingID": 48,
            "invoicenumber": 34,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 1
        }, {
            "id": 18,
            "bookingID": 43,
            "invoicenumber": 84,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 23
        }, {
            "id": 19,
            "bookingID": 15,
            "invoicenumber": 99,
            "fromto": "Panji-Margao",
            "status": "Generated",
            "services": "Hourly",
            "amount": 92
        }, {
            "id": 20,
            "bookingID": 1,
            "invoicenumber": 63,
            "fromto": "Panji-Margao",
            "status": "Pending",
            "services": "Hourly",
            "amount": 48
        }]

    };

});

function DriverInvoiceGENViewController($scope, $mdDialog, $mdMedia) {
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


function DriverInvoicePENViewController($scope, $mdDialog, $mdMedia) {
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