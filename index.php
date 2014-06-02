<?php

require "pinfood.php";

// Adding a pin in the DB
if (isset($_POST['add'])){
    $place[0] = $_POST['name'];
    $place[1] = $_POST['loc_street'];
    $place[2] = $_POST['loc_city'];
    $place[3] = $_POST['loc_number'];
    $place[4] = $_POST['website'];
    
}

pin_load();
include "main.inc";

?>