//for invoiceCustomer.php


app.controller('InvoiceCustomerCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

        if (type == "BI") {
            invoiceCustomerBIViewDialog(ev);
        } else if (type == "CDI") {
            invoiceCustomerCDIViewDialog(ev);
        }
    };


    invoiceCustomerBIViewDialog = function(ev) {
        $mdDialog.show({
                controller: CustomerInvoiceBIViewController,
                templateUrl: 'template/customerinvoiceBIview.html',
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

    invoiceCustomerCDIViewDialog = function(ev) {
        $mdDialog.show({
                controller: CustomerInvoiceCDIViewController,
                templateUrl: 'template/customerinvoiceCDIview.php',
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
        value: 'Booking Tax Receipt'
    }, {
        id: 2,
        value: 'Customer Delay Tax Receipt'
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
            "bookingID": 9,
            "taxreceiptnumber": 59,
            "customer_name": "Catherine",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 14
        }, {
            "id": 2,
            "bookingID": 22,
            "taxreceiptnumber": 36,
            "customer_name": "Jane",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 57
        }, {
            "id": 3,
            "bookingID": 81,
            "taxreceiptnumber": 35,
            "customer_name": "Ronald",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 67
        }, {
            "id": 4,
            "bookingID": 34,
            "taxreceiptnumber": 63,
            "customer_name": "Nicole",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 28
        }, {
            "id": 5,
            "bookingID": 59,
            "taxreceiptnumber": 12,
            "customer_name": "Mildred",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 96
        }, {
            "id": 6,
            "bookingID": 92,
            "taxreceiptnumber": 47,
            "customer_name": "Benjamin",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 75
        }, {
            "id": 7,
            "bookingID": 81,
            "taxreceiptnumber": 35,
            "customer_name": "Mary",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 29
        }, {
            "id": 8,
            "bookingID": 81,
            "taxreceiptnumber": 26,
            "customer_name": "Fred",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 11
        }, {
            "id": 9,
            "bookingID": 29,
            "taxreceiptnumber": 58,
            "customer_name": "Virginia",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 55
        }, {
            "id": 10,
            "bookingID": 35,
            "taxreceiptnumber": 78,
            "customer_name": "Eugene",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 96
        }, {
            "id": 11,
            "bookingID": 79,
            "taxreceiptnumber": 69,
            "customer_name": "Philip",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 75
        }, {
            "id": 12,
            "bookingID": 85,
            "taxreceiptnumber": 24,
            "customer_name": "Lori",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 64
        }, {
            "id": 13,
            "bookingID": 60,
            "taxreceiptnumber": 47,
            "customer_name": "Ralph",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 7
        }, {
            "id": 14,
            "bookingID": 36,
            "taxreceiptnumber": 5,
            "customer_name": "Jerry",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 18
        }, {
            "id": 15,
            "bookingID": 80,
            "taxreceiptnumber": 55,
            "customer_name": "Deborah",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 88
        }, {
            "id": 16,
            "bookingID": 33,
            "taxreceiptnumber": 65,
            "customer_name": "Linda",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 74
        }, {
            "id": 17,
            "bookingID": 95,
            "taxreceiptnumber": 46,
            "customer_name": "Anthony",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 77
        }, {
            "id": 18,
            "bookingID": 95,
            "taxreceiptnumber": 14,
            "customer_name": "Julia",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 8
        }, {
            "id": 19,
            "bookingID": 75,
            "taxreceiptnumber": 45,
            "customer_name": "Julia",
            "fromto": "Panji-Margao",
            "type": "BI",
            "amount": 6
        }, {
            "id": 20,
            "bookingID": 52,
            "taxreceiptnumber": 21,
            "customer_name": "Aaron",
            "fromto": "Panji-Margao",
            "type": "CDI",
            "amount": 29
        }]

    };

});

function CustomerInvoiceBIViewController($scope, $mdDialog, $mdMedia) {
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


function CustomerInvoiceCDIViewController($scope, $mdDialog, $mdMedia) {
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