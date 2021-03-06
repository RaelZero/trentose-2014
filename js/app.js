var markerMode = false;
var lastClick = null;

$(document).ready(function () {
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
    $(".login").click(function () {
        $(".popup_login").show();
        $(".overlay").show();
    });
    
    $(".add").click(function () {
        markerMode = !markerMode;
        
        if (markerMode) {
            for (i = 0; i < 100; i++){
                $(".add").fadeOut(500);
                $(".add").fadeIn(500);
            }
        }
        
        else
            $(".add").finish();
        
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
    
    $(".pin").click(function() {
        $(".pin").append('');
        $(".popup_pin").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        if(!markerMode){
            $(".overlay").hide();
        }
        
        $("div[class*='popup_']").hide();
    });
    
    
    $("#map").on("onMapLoaded", function() {
        // Pin parsing from res/pins.json
        var pins = [];
        
        $.getJSON("res/pins.json", function(pins) {
            for (var i = 0; i < pins.length; i++)
                PinFoodMap.addMarker(pins[i]);
        });        
        
        google.maps.event.addListener(PinFoodMap.map, 'click', function(event) {
            //PinFoodMap.addMarker(event.latLng);
                    
            lastClick = event;
                    
                    
        });
        
        $("#map").click(function() {
            if(markerMode){
                // On click event, get position over the map.
                
                var newPinLat = lastClick.latLng.lat();
                var newPinLng = lastClick.latLng.lng();
                
                // Open the pin adding overlay
                $(".overlay").show();
                $(".popup_add").show();
                $(".add").finish();
                
                $("input[name=lat]").val(newPinLat);
                $("input[name=lng]").val(newPinLng);
            }    
            
        });
        
        
    });
    
});


PinFoodMap = {
    map: null,
    
    loadMap : function (position) {
        console.log("Initializing map...");
        
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
    
        $("#map").trigger("onMapLoaded");
    },
  
    addMarker : function(place){
        console.log("Adding " + place.name + "...");
        var coords = new google.maps.LatLng(place.loc_latitude, place.loc_longitude);
        
        var marker = new google.maps.Marker({
            position: coords, 
            map: PinFoodMap.map,
            title: place.name
        });
    }
};
