var markerMode = false;
// Global only because I'm lazy
var map = null;

$(document).ready (function() {
    console.log("Conditions could hardly be more ideal!");
    
    // Start by hiding the overlay from the main window
    $(".overlay").hide();
    
    // Render the map using geolocation, if availible
    if (navigator.geolocation) {
        // On success, calls back to PinFoodMap.loadMap
        navigator.geolocation.getCurrentPosition(PinFoodMap.loadMap);
        console.log(map);
    }
    else {
      alert('geolocation not supported');
    }
    
    // Hide & Show operations
    $(".login").click(function( ) {
        $(".popup_login").show();
        $(".overlay").show();
    });
    
    $(".add").click(function( ) {
        markerMode = !markerMode;
        
        /*
        if(markerMode){
            $(".popup_add").show();
            $(".overlay").show();
            $(".add").css('z-index', '7');
        }
        
        else{
            $(".popup_add").hide();
            $(".overlay").hide();
            $(".add").css('z-index', '0');
        }
        */
    });
    
    $(".search").click(function( ) {
        $(".popup_search").show();
        $(".overlay").show();
    });
    
    $(".pin").click(function( ) {
        $(".pin").append(''); $(".popup_pin").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        if(!markerMode){
            $(".overlay").hide();
        }
        
        $("div[class*='popup_']").hide();
    });
    
    var mapOverlay = new google.maps.OverlayView();
    mapOverlay.draw = function() {};
    mapOverlay.setMap(map);
    
    
    /*
    // Click event catcher for the map
    google.maps.event.addListener(PinFoodMap.map, 'click', function(){
        if(markerMode){
            map newPin = overlay.getProjection().fromContainerPixelToLatLng(new google.maps.Point(x, y));
            var newMarker = new google.maps.Marker(position: newPin, map : PinFoodMap.map);
        }
    });
    
    */

});


PinFoodMap = {
    loadMap : function (position) {
     
        // Position conversion
        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        // let's set some general options
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        console.log(map);
    
        var povo = new google.maps.LatLng(46.066145, 11.150349);

        var marker = new google.maps.Marker({
            position : povo,
            title : "Marker gnurante"
        });

        marker.setMap(map);
    },
  
    addSampleMarker: function (pos) {
        var sampleMarker = new google.maps.Marker({
            position: pos,
            title: "Fucking funziona!"
        });

        sampleMarker.setMap(PinFoodMap.map);
    },
    
    
    addPin: function () {
    
    }
};
