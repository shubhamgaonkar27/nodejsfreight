//for addsubadmin.php


app.controller('AddEditSubAdminCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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









});






function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}