<?php

require "pinfood.php";

// Adding a pin in the DB

if (isset($_POST['name']) && $_POST['name'] != ""){
    $place = array(
        "name" => $_POST['name'],
        "lat" => $_POST['lat'],
        "lng" => $_POST['lng'],
    );

    pin_insert($place);
}

pin_load();
include "main.inc";

?>
