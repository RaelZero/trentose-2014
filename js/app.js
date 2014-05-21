$(document).ready(function() {
    // Start by hiding the overlay from the map
    $(".overlay").hide();
    
    // Render the map using geolocation
    if (navigator.geolocation) {
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
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_login").hide();
    });
    
    var toggle = false;
    $(".add").click(function( ) {
        toggle = !toggle;
        if (toggle){
            $(".map").click(function(){
                PinFoodMap.addMarker();
                toggle = !toggle;
            });
        }
        /*
        $(".popup_add").show();
        $(".overlay").show();
        */
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_add").hide();
    });
    
    $(".search").click(function( ) {
        $(".popup_search").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_search").hide();
    });
    
    $(".pin").click(function( ) {
        $(".pin").append(''); $(".popup_pin").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_pin").hide();
    });

    PinFoodMap.addSampleMarker();
});


PinFoodMap = {
    map : new Object(),

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
        
        PinFoodMap.map = new google.maps.Map(document.getElementById("map"), myOptions);
    },
    
    addMarker: function(){
        console.log("Just what I expected...");
    },
        
        
    addSampleMarker: function () {
        var myPos = new google.maps.LatLng(46.066145, 11.150349);

        var marker = new google.maps.Marker({
            position : myPos,
            title : "Marker gnurante"
        });

        marker.setMap(PinFoodMap.map);
    },
    
    
    addPin: function (){
    
    },
};
