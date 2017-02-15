/// <reference path="../typings/tsd.d.ts" />
app.controller('AppCtrl', function($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


    function removemask(){

         var myEl = angular.element( document.querySelector( '.md-scroll-mask' ) );
                    myEl.remove();
                    console.log("removed");
    }



    $scope.showForgotPassword = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.prompt()
            .title('Forgot Password')
            .textContent('Enter your Email ')
            .placeholder('Email')
            .ariaLabel('Email')
            .targetEvent(ev)
            .ok('Submit')
            .cancel('Cancel');
        $mdDialog.show(confirm) .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
    };
    //////////////////////////////////////////
    //////////ADD COMPANY DIALOG//////////////
    //////////////////////////////////////////
    $scope.showAddCompany = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'template/add_company_dialog.php',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
             .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    //////////////////////////////////////////
    //////////////////////////////////////////   
    //////////////////////////////////////////

    //////////////////////////////////////////
    //////////ADD COMPANY ADMIN DIALOG/////////
    //////////////////////////////////////////
    $scope.showAddCompanyAdmin = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'template/add_companyadmin_dialog.php',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
            .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };
    //////////////////////////////////////////
    //////////////////////////////////////////   
    //////////////////////////////////////////
    $scope.toggleSidenav = function(menu) {
            $mdSidenav(menu).toggle();
        }
        // $scope.toast = function(message) {
        //     var toast = $mdToast.simple().content('You clicked ' + message).position('bottom right');
        //     $mdToast.show(toast);
        // };
        // $scope.toastList = function(message) {
        //     var toast = $mdToast.simple().content('You clicked ' + message + ' having selected ' + $scope.selected.length + ' item(s)').position('bottom right');
        //     $mdToast.show(toast);
        // };
        // $scope.selected = [];
        // $scope.toggle = function(item, list) {
        //     var idx = list.indexOf(item);
        //     if (idx > -1) list.splice(idx, 1);
        //     else list.push(item);
        // };


    /////////TOOLBAR MENU///////////////
    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);

    };

    $scope.changepassword = function(ev) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
                controller: DialogController,
                templateUrl: 'template/changepassword_dialog.php',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
            .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
        $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
        }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
        });
    };

    $scope.showDelete = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to delete ')
            .textContent('Your data cannot be recovered after this action')

        .targetEvent(ev)
            .ok('YES')
            .cancel('NO');
        $mdDialog.show(confirm) .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
    };

    $scope.showBlock = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to block this Admin ')
            .textContent('You can unblock this Admin later ')

        .targetEvent(ev)
            .ok('YES')
            .cancel('NO');
        $mdDialog.show(confirm) .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
    };

    $scope.showLogout = function(ev) {
        // Appending dialog to document.body to cover sidenav in docs app
        var confirm = $mdDialog.confirm()
            .title('Would you like to Log Out')


        .targetEvent(ev)
            .ok('YES')
            .cancel('NO');
        $mdDialog.show(confirm) .then(function() { //this is calback function
                 removemask();

            }, function() {
                 removemask();


            });
    };


    $scope.filters=[{id:1, name:"Driver"},{id:2, name:"Contractor Driver"},{id:3, name:"Company Driver"}]

  


    $scope.limitOptions = [5, 10, 15, 20];
    $scope.query = {
        order: 'id',
        limit: 5,
        page: 1
    };

    $scope.tabledata = {
        "count": 11,
        "data": [
            { id: 1, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 2, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 3, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 4, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 5, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 6, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 7, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 8, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 9, name: 'Jon', username: 'jon', address: 'Sydney', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' }


        ]
    };



    ////////////////////////////////////////////////
    //////////SIDE NAV DATA/////////////////////////
    ////////////////////////////////////////////////

     $scope.sidemenudata = [
     { "id":1, 'title':'Daily Review',    'expand':true,  'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Runsheet Approval','icon':'playlist_add_check'},{'sub-id':2,'subtitle':'LHD','icon':'local_shipping'},{'sub-id':3,'subtitle':'G3 Working Hr Approval','icon':'alarm_on'}]},
     { "id":2, 'title':'Tracking',        'expand':false, 'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Delivery Driver','icon':'person'},{'sub-id':2,'subtitle':'LHD Driver','icon':'person'},{'sub-id':3,'subtitle':'G3 Employee','icon':'person'}]},
     { "id":3, 'title':'Leave Management','expand':false, 'subcontent':false,'contents':[]},
     { "id":4, 'title':'Invoices',        'expand':false, 'subcontent':false,'contents':[]},
     { "id":5, 'title':'Payrole',         'expand':false, 'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Driver','icon':'person'},{'sub-id':2,'subtitle':'Other Employee','icon':'person'}]},
     { "id":6, 'title':'Reports',         'expand':false, 'subcontent':false,'contents':[]},
     { "id":7, 'title':'Company User',    'expand':false, 'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Company Driver','icon':'person'},{'sub-id':2,'subtitle':'Company Other Employee','icon':'person'}]},
     { "id":8, 'title':'Contractor',      'expand':false, 'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Contrator Details','icon':'info'},{'sub-id':2,'subtitle':'Contrator Vehicles','icon':'local_shipping'},{'sub-id':3,'subtitle':'Contrator Drivers','icon':'group'}]},
     { "id":9, 'title':'Master',          'expand':false, 'subcontent':true, 'contents':[{'sub-id':1,'subtitle':'Routes Schedule','icon':'map'},{'sub-id':2,'subtitle':'Warehouse','icon':'store'},{'sub-id':3,'subtitle':'Department','icon':'view_module'}]},
     { "id":10,'title':'Admin',           'expand':false, 'subcontent':false,'contents':[]},



     ];
    
    ////////////////////////////////////////////////
















});

app.controller('ModalController', function($scope) {

    var moCtrl = this;
    $scope.departments = [{ 'id': 1, 'name': "Daily Review" }, { 'id': 2, 'name': "Tracking" }, { 'id': 3, 'name': "Leave Management" }, { 'id': 4, 'name': "Invoices" }, { 'id': 5, 'name': "Payrole" }, { 'id': 6, 'name': "Reports" }, { 'id': 7, 'name': "Company User" }, { 'id': 8, 'name': "Contractor" }, { 'id': 9, 'name': "Master" }, { 'id': 10, 'name': "Admin" }];
    // $scope.items=[1,2,3,4];
  

    $scope.selected = [3];
    $scope.toggle = function(item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
            console.log("Spliced ", idx);
            list.splice(idx, 1);
        } else {
            list.push(item);
            console.log("Pushed");
        }
    };

    $scope.exists = function(item, list) {
        // console.log(item,list.indexOf(item),list.indexOf(item) > -1);
        return list.indexOf(item) > -1;

    };

    $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
            $scope.selected.length !== $scope.departments.length);
    };

    $scope.isChecked = function() {
        return $scope.selected.length === $scope.departments.length;
    };

    $scope.toggleAll = function() {

        if ($scope.selected.length === $scope.departments.length) {
            $scope.selected = [];
            console.log("togle off()");

        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            //$scope.selected = $scope.items.slice(0);
            //console.log("togle on");
            $scope.selected = [];
            var temparray = $scope.departments.slice(0);
            //console.log(temparray);
            angular.forEach(temparray, function(value, key) {

                $scope.selected.push(value.id);
                //console.log(temp);
            });


        }
    };


});



function DialogController($scope, $mdDialog) {

    $scope.hide = function() {

        $mdDialog.hide();
    };
    $scope.cancel = function() {

        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {

        $mdDialog.hide(answer);
    };
}

/////////////////
///////UserListing Page
/////////////////
app.controller('UserListCtrl', function($scope) {
    var userlist = this;
    $scope.filters = [
        { id: 1, name: 'Driver' },
        { id: 2, name: 'Contrator' },
        { id: 3, name: 'Other' }
    ];


});
app.controller('Usertablecontroller', function($scope) {
    $scope.limitOptions = [5, 10, 15, 20];
    $scope.query = {
        order: 'id',
        limit: 5,
        page: 1
    };

    $scope.tabledata = {
        "count": 11,
        "data": [
            { id: 1, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 2, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 3, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 4, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 5, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 6, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 7, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 8, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 9, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 10, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' },
            { id: 11, name: 'Jon', contact: '123456', email: 'aa@gmaiil.com', emptype: 'Driver' }

        ]
    };
});


function removemask(){

         var myEl = angular.element( document.querySelector( '.md-scroll-mask' ) );
                    myEl.remove();
                    console.log("removed");
    }
