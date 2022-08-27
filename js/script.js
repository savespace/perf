function initMap() {
	var location = {lat: 52.644945, lng: 16.087175};
	var map= new google.maps.Map(document.getElementById("map"), {
		zoom: 16, 
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	})
}