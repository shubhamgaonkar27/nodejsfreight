
var app = angular.module('Freight', ['ngMaterial', 'md.data.table', 'ngAnimate', 'lfNgMdFileInput', 'ngMessages']);

//-------------- Theme code ----------------//
app.config(function($mdThemingProvider) {
  
    $mdThemingProvider.theme('default')
        .primaryPalette('red')
        .accentPalette('blue')
        .warnPalette('red');

});
