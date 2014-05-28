var markerMode = false;

$(document).ready (function() {
    console.log("Conditions could hardly be more ideal!");
    
    // Start by hiding the overlay from the main window
    $(".overlay").hide();
    
    // Render the map using geolocation, if availible
    if (navigator.geolocation) {
        // On success, calls back to PinFoodMap.loadMap
        navigator.geolocation.getCurrentPosition(PinFoodMap.loadMap);
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
    
    
    // TO-DO: Why does this get called BEFORE the initialization if in the document.ready section it's actually called AFTER it? :O
    $("#map").on("onMapLoaded", function(){
        PinFoodMap.addSampleMarker(new google.maps.LatLng(45.0, 12.0));
    });
    
});


PinFoodMap = {
    map: null,
    
    loadMap : function (position) {
        console.log("Initializing map");
        
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
        
        PinFoodMap.map = new google.maps.Map(document.getElementById("map"), myOptions);
        console.log(PinFoodMap.map);
    
        var povo = new google.maps.LatLng(46.066145, 11.150349);

        var marker = new google.maps.Marker({
            position : povo,
            title : "Marker gnurante"
        });

        marker.setMap(PinFoodMap.map);
        $("#map").trigger("onMapLoaded");
        
    },
  
    addSampleMarker: function (pos) {
        console.log("Adding sample marker");
        var sampleMarker = new google.maps.Marker({
            position: pos,
            title: "Fucking funziona!",
            map: PinFoodMap.map
        });
    },
    
    addMarker : function(place){
        var coords = new google.maps.LatLng(place.lat, place.lng);
        
        var marker = new google.maps.Marker({
          position: coords, 
          map: PinFoodMap.map,
          title: place.name
        });          
    }
    
};
