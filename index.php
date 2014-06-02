<?php

require "pinfood.php";

// Adding a pin in the DB
if (isset($_POST['name']) && $_POST['name'] != ""){
    $place = array(
        "name" => $_POST['name'],
        "address" => $_POST['tags'],
        "lat" => $_POST['place_lat'],
        "lng" => $_POST['place_lng'],
    );
}

pin_load();
include "main.inc";

?>
