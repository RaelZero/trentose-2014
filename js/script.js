$(document).ready(function() {
    $(".overlay").hide();
    
    $(".login").click(function( ) {
        $(".popup_log").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup_log").hide();
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