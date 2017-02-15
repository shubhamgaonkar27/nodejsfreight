//for company_listing.php


app.controller('CompanyListCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    // $scope.companyDetailViewDialog = function (ev) {

    //     $mdDialog.show({
    //             controller: CompanyDetailViewController,
    //             templateUrl: 'template/companydetail.php',
    //             parent: angular.element(document.body),
    //             targetEvent: ev,
    //             multiple: true,
    //             clickOutsideToClose: true,
    //             fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    //         })
    //         .then(function () {
    //             removemask();
    //         }, function () {
    //             removemask();
    //         });
    // };

     $scope.filtersStatus = [{
        id: 1,
        value: 'Pending'
    }, {
        id: 2,
        value: 'Accepted'
       },
     {
        id: 3,
        value: 'Rejected'
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
  "id" : 1,
  "name" : "Dennis",
  "email" : "dwatkins0@cpanel.net",
  "vehicleno" : 29,
  "driverno" : 39,
  "status" : "pending"
}, {
  "id" : 2,
  "name" : "Jane",
  "email" : "jmoore1@wsj.com",
  "vehicleno" : 59,
  "driverno" : 51,
  "status" : "accepted"
}, {
  "id" : 3,
  "name" : "Elizabeth",
  "email" : "esmith2@goo.ne.jp",
  "vehicleno" : 60,
  "driverno" : 10,
  "status" : "rejected"
}, {
  "id" : 4,
  "name" : "Phyllis",
  "email" : "pjacobs3@joomla.org",
  "vehicleno" : 46,
  "driverno" : 81,
  "status" : "accepted"
}, {
  "id" : 5,
  "name" : "Judith",
  "email" : "jkelly4@symantec.com",
  "vehicleno" : 92,
  "driverno" : 92,
  "status" : "pending"
}, {
  "id" : 6,
  "name" : "David",
  "email" : "dberry5@alexa.com",
  "vehicleno" : 100,
  "driverno" : 1,
  "status" : "accepted"
}, {
  "id" : 7,
  "name" : "Kathryn",
  "email" : "kreynolds6@wordpress.org",
  "vehicleno" : 80,
  "driverno" : 13,
  "status" : "pending"
}, {
  "id" : 8,
  "name" : "Elizabeth",
  "email" : "elane7@independent.co.uk",
  "vehicleno" : 7,
  "driverno" : 84,
  "status" : "accepted"
}, {
  "id" : 9,
  "name" : "Walter",
  "email" : "whawkins8@discovery.com",
  "vehicleno" : 88,
  "driverno" : 81,
  "status" : "pending"
}, {
  "id" : 10,
  "name" : "Matthew",
  "email" : "msimpson9@imageshack.us",
  "vehicleno" : 97,
  "driverno" : 25,
  "status" : "pending"
}, {
  "id" : 11,
  "name" : "Katherine",
  "email" : "ksancheza@skyrock.com",
  "vehicleno" : 50,
  "driverno" : 16,
  "status" : "accepted"
}, {
  "id" : 12,
  "name" : "Sara",
  "email" : "smooreb@netvibes.com",
  "vehicleno" : 24,
  "driverno" : 64,
  "status" : "pending"
}, {
  "id" : 13,
  "name" : "Rose",
  "email" : "rcarrollc@vkontakte.ru",
  "vehicleno" : 43,
  "driverno" : 45,
  "status" : "rejected"
}, {
  "id" : 14,
  "name" : "Mark",
  "email" : "mfranklind@admin.ch",
  "vehicleno" : 88,
  "driverno" : 21,
  "status" : "accepted"
}, {
  "id" : 15,
  "name" : "Amanda",
  "email" : "afraziere@techcrunch.com",
  "vehicleno" : 17,
  "driverno" : 59,
  "status" : "pending"
}, {
  "id" : 16,
  "name" : "Terry",
  "email" : "thansenf@blogs.com",
  "vehicleno" : 6,
  "driverno" : 31,
  "status" : "rejected"
}, {
  "id" : 17,
  "name" : "Shawn",
  "email" : "shughesg@wunderground.com",
  "vehicleno" : 89,
  "driverno" : 27,
  "status" : "rejected"
}, {
  "id" : 18,
  "name" : "Annie",
  "email" : "amedinah@bbb.org",
  "vehicleno" : 53,
  "driverno" : 31,
  "status" : "pending"
}, {
  "id" : 19,
  "name" : "David",
  "email" : "dfosteri@hugedomains.com",
  "vehicleno" : 22,
  "driverno" : 24,
  "status" : "rejected"
}, {
  "id" : 20,
  "name" : "Sarah",
  "email" : "slynchj@bravesites.com",
  "vehicleno" : 82,
  "driverno" : 70,
  "status" : "pending"
}]
    };

});

// function CompanyDetailViewController($scope, $mdDialog,$mdMedia) {
//     $scope.hide = function () {
//         $mdDialog.hide();
//     };

//     $scope.cancel = function () {
//         $mdDialog.cancel();
//     };

//     $scope.answer = function () {
//         $mdDialog.hide();
//     };
//     $scope.ff = "kkkk";
    
// }




function removemask() {

    var myEl = angular.element(document.querySelector('.md-scroll-mask'));
    myEl.remove();
    console.log("removed");
}