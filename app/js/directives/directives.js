// app.directive('includeReplace', function () {
//     return {
//         require: 'ngInclude',
//         restrict: 'A', /* optional */
//         link: function (scope, el, attrs) {
//             el.replaceWith(el.children());
//         }
//     };
// });

app.directive('sidenav', function() {
    return {
        restrict: 'E',
        templateUrl: "template/sidenav.html",
        scope: {
            drivernotificationcount: '=?'
        },
        controller: function($scope) {
            //    console.log($scope.data);
            $scope.drivernotificationcount = 20;
        }
    };
});