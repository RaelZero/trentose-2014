$(document).ready(function() {
    // Start by hiding the overlay from the map
    $(".overlay").hide();
    
    // Hide & Show operations    
    $(".login").click(function( ) {
        $(".popup_login").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_login").hide();
    });
    
    $(".add").click(function( ) {
        $(".popup_add").show();
        $(".overlay").show();
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
    
    
});