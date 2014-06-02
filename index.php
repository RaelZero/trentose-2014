<?php

require "pinfood.php";

// Adding a pin in the DB
if (isset($_POST['opt']) && $_POST['opt'] == "insert"){
    echo "OMG IT'S WORKING";
}

pin_load();
include "main.inc";

?>