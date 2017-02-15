//for setting.php


app.controller('SettingCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    
    $scope.toggleSidenav = function (menu) {
        $mdSidenav(menu).toggle();
    };

   

 



  

});





