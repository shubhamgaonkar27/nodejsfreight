//from driver track

app.controller('DriverTrackCtrl', function ($scope, $mdDialog, $mdMedia, $mdSidenav, $mdToast, $location) {
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
    "count": 3,
    "data": [{
      "id": 1,
      "lastLocation": "montreal, quebec",
      "bookingStatus": "Status2"
    }, {
      "id": 2,
      "lastLocation": "toronto, ont",
      "bookingStatus": "Status1"
    }, {
      "id": 3,
      "lastLocation": "chicago, il",
      "bookingStatus": "Status1"
    }]
  };


  //this function will convert the data into waypoint array
  function generateWaypointArrayFromData(data) {
     //console.log(data[0].lastLocation);
    for (var i = 0; i < data.length; i++) {
      waypts.push({
        location: data[i].lastLocation,
        stopover: true
      })
    }
    console.log("waypoint",waypts);
  };

  //following code will remove the overlay along eith the button from the dom.
  //this is needed because google map library takes time to load
  $scope.mapOpened = true;
  $scope.showMap = function () {
    $scope.mapOpened = false;
    generateWaypointArrayFromData($scope.tabledata.data);
    //console.log($scope.tabledata.data);
    initMap();
  };

  var map;
  var waypts = [];


  //this function is called wen track button is clicked
  function initMap() {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 15,
        lng: 73
      },
      zoom: 8
    });
    directionsDisplay.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsDisplay);


  };

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: "Halifax, NS",
      destination: "Vancouver, BC",
      waypoints: waypts,
      optimizeWaypoints: true,

      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        console.log(response);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }


  // if (typeof google === 'object' && typeof google.maps === 'object') {

  // }









});



function removemask() {

  var myEl = angular.element(document.querySelector('.md-scroll-mask'));
  myEl.remove();
  console.log("removed");
}