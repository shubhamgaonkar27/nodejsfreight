//for CustomerRelatedDelayView.php


app.controller('CustomerRelatedDelayViewCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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

    $scope.addNoteDialog = function(ev) {

        //    var confirm = $mdDialog.prompt()
        //   .title('Add a Note')

        //   .targetEvent(ev)
        //   .ok('SAVE')
        //   .cancel('Cancel');

        // $mdDialog.show(confirm).then(function(result) {
        //   removemask();
        // }, function() {
        //   removemask();
        // });





        $mdDialog.show({
                controller: NoteAddController,
                templateUrl: 'template/note.html',
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
            "noteDesc": "Some Text",
            "noteBy": "Margaret",
            "date": "10/31/2016",
            "time": "7:25 PM"
        }, {
            "id": 2,
            "noteDesc": "Some Text",
            "noteBy": "Ann",
            "date": "3/18/2016",
            "time": "7:54 AM"
        }, {
            "id": 3,
            "noteDesc": "Some Text",
            "noteBy": "Katherine",
            "date": "3/15/2016",
            "time": "5:41 PM"
        }, {
            "id": 4,
            "noteDesc": "Some Text",
            "noteBy": "Diane",
            "date": "4/17/2016",
            "time": "11:28 PM"
        }, {
            "id": 5,
            "noteDesc": "Some Text",
            "noteBy": "Evelyn",
            "date": "4/22/2016",
            "time": "11:50 AM"
        }, {
            "id": 6,
            "noteDesc": "Some Text",
            "noteBy": "Carl",
            "date": "8/10/2016",
            "time": "2:23 AM"
        }, {
            "id": 7,
            "noteDesc": "Some Text",
            "noteBy": "Jonathan",
            "date": "2/24/2016",
            "time": "6:39 AM"
        }, {
            "id": 8,
            "noteDesc": "Some Text",
            "noteBy": "Doris",
            "date": "5/21/2016",
            "time": "5:49 PM"
        }, {
            "id": 9,
            "noteDesc": "Some Text",
            "noteBy": "Julia",
            "date": "12/24/2016",
            "time": "2:20 AM"
        }, {
            "id": 10,
            "noteDesc": "Some Text",
            "noteBy": "Earl",
            "date": "3/21/2016",
            "time": "1:24 AM"
        }, {
            "id": 11,
            "noteDesc": "Some Text",
            "noteBy": "Teresa",
            "date": "11/23/2016",
            "time": "2:00 PM"
        }, {
            "id": 12,
            "noteDesc": "Some Text",
            "noteBy": "Kathy",
            "date": "9/29/2016",
            "time": "7:31 PM"
        }, {
            "id": 13,
            "noteDesc": "Some Text",
            "noteBy": "Debra",
            "date": "4/19/2016",
            "time": "8:24 PM"
        }, {
            "id": 14,
            "noteDesc": "Some Text",
            "noteBy": "Louise",
            "date": "7/23/2016",
            "time": "10:08 PM"
        }, {
            "id": 15,
            "noteDesc": "Some Text",
            "noteBy": "Ronald",
            "date": "3/15/2016",
            "time": "11:53 PM"
        }, {
            "id": 16,
            "noteDesc": "Some Text",
            "noteBy": "Jessica",
            "date": "3/3/2016",
            "time": "5:01 AM"
        }, {
            "id": 17,
            "noteDesc": "Some Text",
            "noteBy": "Philip",
            "date": "11/19/2016",
            "time": "1:26 PM"
        }, {
            "id": 18,
            "noteDesc": "Some Text",
            "noteBy": "Dennis",
            "date": "9/20/2016",
            "time": "5:24 AM"
        }, {
            "id": 19,
            "noteDesc": "Some Text",
            "noteBy": "Peter",
            "date": "5/24/2016",
            "time": "8:52 AM"
        }, {
            "id": 20,
            "noteDesc": "Some Text",
            "noteBy": "Samuel",
            "date": "2/22/2016",
            "time": "11:09 AM"
        }]

    };

});

function NoteAddController($scope, $mdDialog, $mdMedia) {
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