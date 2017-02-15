//for user_listing.php


app.controller('UserListCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.showBlockPopUp = function (id, blockVal, ev) {
        console.log(blockVal);
        if (blockVal) {
            var confirm = $mdDialog.prompt()
                .title('Block User')
                .textContent('Reason for Blocking')



            .targetEvent(ev)
                .ok('Send Mail')
                .cancel('cancel');

            $mdDialog.show(confirm).then(function (result) {
                //send mail code here
                removemask();
            }, function () {
                $scope.tabledata.data[id].blocked = false;
                removemask();
            });
        }
    };

 $scope.filtersType = [{
        id: 1,
        value: 'Blocked'
    }, {
        id: 2,
        value: 'Un-Blocked'
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
            "name": "Heather",
            "email": "hcrawford0@tiny.cc",
            "contact": "63-(839)154-8193",
            "blocked": false
        }, {
            "id": 2,
            "name": "Anna",
            "email": "aking1@stumbleupon.com",
            "contact": "66-(962)363-9229",
            "blocked": false
        }, {
            "id": 3,
            "name": "Barbara",
            "email": "bmitchell2@independent.co.uk",
            "contact": "62-(293)515-1113",
            "blocked": false
        }, {
            "id": 4,
            "name": "Susan",
            "email": "swilliams3@ed.gov",
            "contact": "86-(622)185-9790",
            "blocked": false
        }, {
            "id": 5,
            "name": "Wanda",
            "email": "wandrews4@netlog.com",
            "contact": "63-(102)565-4880",
            "blocked": true
        }, {
            "id": 6,
            "name": "Bruce",
            "email": "bdixon5@123-reg.co.uk",
            "contact": "63-(351)256-2200",
            "blocked": false
        }, {
            "id": 7,
            "name": "Ronald",
            "email": "rsnyder6@ucsd.edu",
            "contact": "86-(392)912-0073",
            "blocked": true
        }, {
            "id": 8,
            "name": "Michelle",
            "email": "mparker7@behance.net",
            "contact": "353-(881)927-4990",
            "blocked": true
        }, {
            "id": 9,
            "name": "Mark",
            "email": "mbrown8@diigo.com",
            "contact": "86-(407)147-1288",
            "blocked": false
        }, {
            "id": 10,
            "name": "Christine",
            "email": "cpeters9@youtu.be",
            "contact": "86-(239)433-0926",
            "blocked": true
        }, {
            "id": 11,
            "name": "Emily",
            "email": "elittlea@nifty.com",
            "contact": "238-(769)361-4022",
            "blocked": true
        }, {
            "id": 12,
            "name": "Joyce",
            "email": "jrussellb@theatlantic.com",
            "contact": "251-(628)718-2042",
            "blocked": false
        }, {
            "id": 13,
            "name": "Jeffrey",
            "email": "jbaileyc@kickstarter.com",
            "contact": "66-(169)559-6338",
            "blocked": false
        }, {
            "id": 14,
            "name": "Theresa",
            "email": "tbishopd@tripod.com",
            "contact": "261-(508)340-5275",
            "blocked": true
        }, {
            "id": 15,
            "name": "Carlos",
            "email": "cmyerse@theguardian.com",
            "contact": "228-(961)192-4494",
            "blocked": false
        }, {
            "id": 16,
            "name": "Frank",
            "email": "fvasquezf@rakuten.co.jp",
            "contact": "353-(603)872-4141",
            "blocked": false
        }, {
            "id": 17,
            "name": "Martha",
            "email": "mkingg@senate.gov",
            "contact": "86-(154)866-5668",
            "blocked": true
        }, {
            "id": 18,
            "name": "Jessica",
            "email": "jwilliamsonh@sbwire.com",
            "contact": "62-(755)718-0602",
            "blocked": true
        }, {
            "id": 19,
            "name": "Jesse",
            "email": "jharrisi@pinterest.com",
            "contact": "51-(767)565-9562",
            "blocked": true
        }, {
            "id": 20,
            "name": "Patricia",
            "email": "pwalkerj@pcworld.com",
            "contact": "370-(100)124-3978",
            "blocked": false
        }]

    };

});

function DriverViewController($scope, $mdDialog, $mdMedia) {
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