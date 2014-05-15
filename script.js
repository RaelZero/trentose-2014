$(document).ready(function() {
    $(".overlay").hide();
    
    $(".login").click(function( ) {
        $(".popup").show();
        $(".overlay").show();
    });
    
    $(".overlay").click(function() {
        $(".overlay").hide();
        $(".popup").hide();
    });
});