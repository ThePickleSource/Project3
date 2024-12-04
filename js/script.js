function initMap() {
  var el = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.8781, -87.6298);
  
  var mapOptions = {
	  center: myLocation,
	  zoom: 10,
	  zoomControl: true,
	  zoomControlOptions: {
		position: google.maps.ControlPosition.LEFT_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
	  position: myLocation,
	  map:myMap,
	  animation: google.maps.Animation.DROP,
  });
}


