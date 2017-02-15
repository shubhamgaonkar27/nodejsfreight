//for viewvehicle.php


app.controller('ViewVehicleCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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


    $scope.showeditExtraServices = function(ev) {
        $mdDialog.show({
                controller: EditExtraServicesController,
                templateUrl: 'template/vehicleEditExtraServiceDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {},
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function() {
                removemask();
            }, function() {
                removemask();
            });
    };
    $scope.showAddMainServices = function(ev) {
        $mdDialog.show({
                controller: AddMainServicesController,
                templateUrl: 'template/vehicleEditMainServiceDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                locals: {},
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
            "mainservice": "Hourly",
            "customerRate": 27,
            "indiDriverRate": 51,
            "companyRate": 16
        }, {
            "id": 2,
            "mainservice": "Hourly",
            "customerRate": 95,
            "indiDriverRate": 46,
            "companyRate": 20
        }, {
            "id": 3,
            "mainservice": "Hourly",
            "customerRate": 49,
            "indiDriverRate": 27,
            "companyRate": 97
        }, {
            "id": 4,
            "mainservice": "Hourly",
            "customerRate": 13,
            "indiDriverRate": 90,
            "companyRate": 49
        }, {
            "id": 5,
            "mainservice": "Hourly",
            "customerRate": 56,
            "indiDriverRate": 18,
            "companyRate": 24
        }, {
            "id": 6,
            "mainservice": "Hourly",
            "customerRate": 27,
            "indiDriverRate": 17,
            "companyRate": 45
        }, {
            "id": 7,
            "mainservice": "Hourly",
            "customerRate": 19,
            "indiDriverRate": 86,
            "companyRate": 18
        }, {
            "id": 8,
            "mainservice": "Hourly",
            "customerRate": 27,
            "indiDriverRate": 83,
            "companyRate": 2
        }, {
            "id": 9,
            "mainservice": "Hourly",
            "customerRate": 98,
            "indiDriverRate": 66,
            "companyRate": 46
        }, {
            "id": 10,
            "mainservice": "Hourly",
            "customerRate": 90,
            "indiDriverRate": 74,
            "companyRate": 90
        }, {
            "id": 11,
            "mainservice": "Hourly",
            "customerRate": 76,
            "indiDriverRate": 67,
            "companyRate": 37
        }, {
            "id": 12,
            "mainservice": "Hourly",
            "customerRate": 30,
            "indiDriverRate": 77,
            "companyRate": 95
        }, {
            "id": 13,
            "mainservice": "Hourly",
            "customerRate": 42,
            "indiDriverRate": 57,
            "companyRate": 28
        }, {
            "id": 14,
            "mainservice": "Hourly",
            "customerRate": 23,
            "indiDriverRate": 44,
            "companyRate": 10
        }, {
            "id": 15,
            "mainservice": "Hourly",
            "customerRate": 18,
            "indiDriverRate": 18,
            "companyRate": 27
        }, {
            "id": 16,
            "mainservice": "Hourly",
            "customerRate": 69,
            "indiDriverRate": 43,
            "companyRate": 64
        }, {
            "id": 17,
            "mainservice": "Hourly",
            "customerRate": 27,
            "indiDriverRate": 55,
            "companyRate": 22
        }, {
            "id": 18,
            "mainservice": "Hourly",
            "customerRate": 70,
            "indiDriverRate": 36,
            "companyRate": 90
        }, {
            "id": 19,
            "mainservice": "Hourly",
            "customerRate": 13,
            "indiDriverRate": 47,
            "companyRate": 33
        }, {
            "id": 20,
            "mainservice": "Hourly",
            "customerRate": 39,
            "indiDriverRate": 85,
            "companyRate": 65
        }]
    };

});

function EditExtraServicesController($scope, $mdDialog, $mdMedia) {


    $scope.services = [{
        "id": 1,
        "service_name": "Service Name"
    }, {
        "id": 2,
        "service_name": "Service Name"
    }, {
        "id": 3,
        "service_name": "Service Name"
    }, {
        "id": 4,
        "service_name": "Service Name"
    }, {
        "id": 5,
        "service_name": "Service Name"
    }, {
        "id": 6,
        "service_name": "Service Name"
    }, {
        "id": 7,
        "service_name": "Service Name"
    }];

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide();
    };

};

function AddMainServicesController($scope, $mdDialog, $mdMedia) {


    $scope.services = [{
        "id": 1,
        "service_name": "Service Name"
    }, {
        "id": 2,
        "service_name": "Service Name"
    }, {
        "id": 3,
        "service_name": "Service Name"
    }, {
        "id": 4,
        "service_name": "Service Name"
    }, {
        "id": 5,
        "service_name": "Service Name"
    }, {
        "id": 6,
        "service_name": "Service Name"
    }, {
        "id": 7,
        "service_name": "Service Name"
    }];

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide();
    };


};



function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
}