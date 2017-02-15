//for CustomerRelatedDelay.php


app.controller('CustomerRelatedDelayCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.bookingViewDialog = function (ev) {

        $mdDialog.show({
                controller: BookingViewController,
                templateUrl: 'template/bookingrequestview.php',
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
  "bookingID": 97,
  "date": "6/21/2016",
  "customer_name": "Tammy",
  "contact": "86-(987)591-9493",
  "rate": 24,
  "status": "Status"
}, {
  "id": 2,
  "bookingID": 84,
  "date": "6/25/2016",
  "customer_name": "Arthur",
  "contact": "84-(692)879-5901",
  "rate": 9,
  "status": "Status"
}, {
  "id": 3,
  "bookingID": 81,
  "date": "5/19/2016",
  "customer_name": "Janet",
  "contact": "62-(130)124-9126",
  "rate": 78,
  "status": "Status"
}, {
  "id": 4,
  "bookingID": 71,
  "date": "1/3/2016",
  "customer_name": "Tina",
  "contact": "66-(209)432-1379",
  "rate": 62,
  "status": "Status"
}, {
  "id": 5,
  "bookingID": 78,
  "date": "1/9/2016",
  "customer_name": "Craig",
  "contact": "57-(746)855-6905",
  "rate": 80,
  "status": "Status"
}, {
  "id": 6,
  "bookingID": 75,
  "date": "1/13/2016",
  "customer_name": "Gloria",
  "contact": "92-(812)874-2037",
  "rate": 99,
  "status": "Status"
}, {
  "id": 7,
  "bookingID": 12,
  "date": "6/18/2016",
  "customer_name": "Juan",
  "contact": "420-(718)930-1181",
  "rate": 37,
  "status": "Status"
}, {
  "id": 8,
  "bookingID": 94,
  "date": "12/16/2016",
  "customer_name": "Jessica",
  "contact": "7-(761)310-5398",
  "rate": 51,
  "status": "Status"
}, {
  "id": 9,
  "bookingID": 51,
  "date": "10/5/2016",
  "customer_name": "Randy",
  "contact": "86-(222)701-0782",
  "rate": 8,
  "status": "Status"
}, {
  "id": 10,
  "bookingID": 5,
  "date": "9/26/2016",
  "customer_name": "Russell",
  "contact": "351-(934)237-6568",
  "rate": 62,
  "status": "Status"
}, {
  "id": 11,
  "bookingID": 90,
  "date": "5/9/2016",
  "customer_name": "Joan",
  "contact": "86-(156)367-8253",
  "rate": 88,
  "status": "Status"
}, {
  "id": 12,
  "bookingID": 7,
  "date": "12/22/2016",
  "customer_name": "Catherine",
  "contact": "1-(202)885-9490",
  "rate": 39,
  "status": "Status"
}, {
  "id": 13,
  "bookingID": 46,
  "date": "4/28/2016",
  "customer_name": "Raymond",
  "contact": "66-(637)199-8846",
  "rate": 41,
  "status": "Status"
}, {
  "id": 14,
  "bookingID": 100,
  "date": "11/8/2016",
  "customer_name": "Susan",
  "contact": "55-(719)274-3666",
  "rate": 62,
  "status": "Status"
}, {
  "id": 15,
  "bookingID": 71,
  "date": "5/6/2016",
  "customer_name": "Jacqueline",
  "contact": "66-(961)409-8717",
  "rate": 59,
  "status": "Status"
}, {
  "id": 16,
  "bookingID": 80,
  "date": "1/3/2016",
  "customer_name": "Barbara",
  "contact": "86-(800)832-8767",
  "rate": 52,
  "status": "Status"
}, {
  "id": 17,
  "bookingID": 27,
  "date": "12/25/2016",
  "customer_name": "Mary",
  "contact": "98-(484)126-7294",
  "rate": 6,
  "status": "Status"
}, {
  "id": 18,
  "bookingID": 96,
  "date": "10/24/2016",
  "customer_name": "Amy",
  "contact": "62-(865)171-3356",
  "rate": 78,
  "status": "Status"
}, {
  "id": 19,
  "bookingID": 87,
  "date": "12/19/2016",
  "customer_name": "Jeremy",
  "contact": "86-(101)180-1798",
  "rate": 66,
  "status": "Status"
}, {
  "id": 20,
  "bookingID": 51,
  "date": "12/5/2016",
  "customer_name": "Roger",
  "contact": "7-(304)141-8680",
  "rate": 30,
  "status": "Status"
}]

    };

});

function BookingViewController($scope, $mdDialog, $mdMedia) {
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