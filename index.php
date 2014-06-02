<?php

require "pinfood.php";

// Adding a pin in the DB
if (isset($_POST['opt'])){
    echo "OMG IT'S WORKING";
}

pin_load();
include "main.inc";

?>