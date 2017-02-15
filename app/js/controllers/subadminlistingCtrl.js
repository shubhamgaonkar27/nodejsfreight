//for subadmin_listing.php


app.controller('SubAdminListCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.subAdminViewDialog = function(ev) {

        $mdDialog.show({
                controller: SubAdminViewController,
                templateUrl: 'template/subadminview.html',
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

    $scope.subAdminViewLogsDialog = function(ev) {

        $mdDialog.show({
                controller: SubAdminViewLogController,
                templateUrl: 'template/viewlogs.html',
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
            value: 'Active'
        }, {
            id: 2,
            value: 'Inactive'
        }

    ];






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
            "name": "Wayne",
            "username": "wmoreno0",
            "address": "Negreiros",
            "email": "wreynolds0@jiathis.com",
            "contact": "351-(334)991-2519",
            "status": "Inactive"
        }, {
            "id": 2,
            "name": "Daniel",
            "username": "dhenderson1",
            "address": "Veracruz",
            "email": "drogers1@dailymail.co.uk",
            "contact": "507-(427)935-4756",
            "status": "Active"
        }, {
            "id": 3,
            "name": "Gloria",
            "username": "ghoward2",
            "address": "Louny",
            "email": "gwilliamson2@amazon.com",
            "contact": "420-(646)133-0091",
            "status": "Active"
        }, {
            "id": 4,
            "name": "Russell",
            "username": "rporter3",
            "address": "Muyi",
            "email": "rgilbert3@phoca.cz",
            "contact": "86-(715)937-8666",
            "status": "Active"
        }, {
            "id": 5,
            "name": "Christina",
            "username": "cstone4",
            "address": "Köneürgench",
            "email": "ccruz4@washingtonpost.com",
            "contact": "993-(539)525-1883",
            "status": "Inactive"
        }, {
            "id": 6,
            "name": "Steven",
            "username": "sdiaz5",
            "address": "Kot Sultan",
            "email": "sbanks5@archive.org",
            "contact": "92-(872)275-3481",
            "status": "Inactive"
        }, {
            "id": 7,
            "name": "Jason",
            "username": "jpayne6",
            "address": "Síkinos",
            "email": "jfuller6@theatlantic.com",
            "contact": "30-(318)950-3673",
            "status": "Active"
        }, {
            "id": 8,
            "name": "Jeffrey",
            "username": "jrodriguez7",
            "address": "Amnat Charoen",
            "email": "jcox7@soundcloud.com",
            "contact": "66-(310)778-0133",
            "status": "Inactive"
        }, {
            "id": 9,
            "name": "Michael",
            "username": "mburns8",
            "address": "Barong",
            "email": "mlynch8@disqus.com",
            "contact": "63-(151)706-8396",
            "status": "Active"
        }, {
            "id": 10,
            "name": "Janice",
            "username": "jkim9",
            "address": "Coroico",
            "email": "jmcdonald9@skype.com",
            "contact": "591-(700)357-2382",
            "status": "Active"
        }, {
            "id": 11,
            "name": "Dorothy",
            "username": "dcastilloa",
            "address": "Makungu",
            "email": "drossa@redcross.org",
            "contact": "255-(920)864-8502",
            "status": "Active"
        }, {
            "id": 12,
            "name": "Robert",
            "username": "rreyesb",
            "address": "Pantai",
            "email": "rjenkinsb@fema.gov",
            "contact": "62-(471)193-4236",
            "status": "Inactive"
        }, {
            "id": 13,
            "name": "Joan",
            "username": "joliverc",
            "address": "Baryshivka",
            "email": "jandersonc@cmu.edu",
            "contact": "380-(196)407-0048",
            "status": "Inactive"
        }, {
            "id": 14,
            "name": "Edward",
            "username": "ehicksd",
            "address": "Jinling",
            "email": "ekelleyd@barnesandnoble.com",
            "contact": "86-(669)535-1050",
            "status": "Inactive"
        }, {
            "id": 15,
            "name": "Roger",
            "username": "rolivere",
            "address": "Bunut",
            "email": "rknighte@goo.gl",
            "contact": "62-(680)468-2623",
            "status": "Inactive"
        }, {
            "id": 16,
            "name": "Irene",
            "username": "ifoxf",
            "address": "Soledad",
            "email": "iharrisonf@github.io",
            "contact": "58-(359)777-7033",
            "status": "Inactive"
        }, {
            "id": 17,
            "name": "Willie",
            "username": "wpalmerg",
            "address": "Balakhta",
            "email": "wperkinsg@clickbank.net",
            "contact": "7-(563)609-4281",
            "status": "Inactive"
        }, {
            "id": 18,
            "name": "Robert",
            "username": "rrobinsonh",
            "address": "Bonn",
            "email": "rscotth@t.co",
            "contact": "49-(919)929-0705",
            "status": "Active"
        }, {
            "id": 19,
            "name": "Mary",
            "username": "mfergusoni",
            "address": "Limushan",
            "email": "mholmesi@zdnet.com",
            "contact": "86-(932)998-8521",
            "status": "Active"
        }, {
            "id": 20,
            "name": "Melissa",
            "username": "mhillj",
            "address": "Binagadi",
            "email": "mrodriguezj@prweb.com",
            "contact": "994-(246)482-9940",
            "status": "Active"
        }]

    };

});

function SubAdminViewController($scope, $mdDialog, $mdMedia) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function() {
        $mdDialog.hide();
    };


    $scope.tabledata = {
        "count": 20,
        "data": [{
            "id": 1,
            "modulename": "Users",
            "read": true,
            "write": true
        }, {
            "id": 2,
            "modulename": "Users",
            "read": true,
            "write": false
        }, {
            "id": 3,
            "modulename": "Users",
            "read": true,
            "write": false
        }, {
            "id": 4,
            "modulename": "Users",
            "read": false,
            "write": false
        }, {
            "id": 5,
            "modulename": "Users",
            "read": false,
            "write": false
        }, {
            "id": 6,
            "modulename": "Users",
            "read": true,
            "write": true
        }, {
            "id": 7,
            "modulename": "Users",
            "read": false,
            "write": false
        }, {
            "id": 8,
            "modulename": "Users",
            "read": true,
            "write": true
        }, {
            "id": 9,
            "modulename": "Users",
            "read": false,
            "write": false
        }, {
            "id": 10,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 11,
            "modulename": "Users",
            "read": true,
            "write": false
        }, {
            "id": 12,
            "modulename": "Users",
            "read": true,
            "write": false
        }, {
            "id": 13,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 14,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 15,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 16,
            "modulename": "Users",
            "read": true,
            "write": true
        }, {
            "id": 17,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 18,
            "modulename": "Users",
            "read": false,
            "write": false
        }, {
            "id": 19,
            "modulename": "Users",
            "read": false,
            "write": true
        }, {
            "id": 20,
            "modulename": "Users",
            "read": true,
            "write": true
        }]
    };




}


function SubAdminViewLogController($scope, $mdDialog, $mdMedia) {
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