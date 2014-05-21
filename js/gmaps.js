function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(45.432709, 12.312640),
        zoom: 13
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);