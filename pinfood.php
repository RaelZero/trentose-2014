<?php

function db_connect(){
    $host = "localhost";
    $dbname = "trentose";
    $user = "trentose";
    $pass = "CYQhjxVc6JF5LY5c";

    $connection = mysql_connect($host,$user,$pass);
    
    echo ("Now connected to DB." . PHP_EOL);
    echo (PHP_EOL . $connection);

    return $connection;
}


function pin_load (){
    $PIN_LOAD_SQL = "select * from trentose.places";
    
    //open database
    $dbh = db_connect();

    $fp = fopen("./res/pins.json", "w+");
    
	$sth = mysql_query($PIN_LOAD_SQL);
    
	$rows = array();
	while($r = mysql_fetch_assoc($sth)){
    	$rows[] = $r;
    }

	//echo json_encode($rows);

	fwrite($fp, json_encode($rows));
    fclose($fp);

    echo("Finished writing on JSON file, should now availible at pins.json\n");
	
    // close database
	$dbh = null;    
}

/*
// funzione per l'inserimento del pin
// @PARAM array associativo contenente 'nome' 'address' 'picture' 'street' 'city' 'state' 'country' 'latitude' 'longitude'

function pin_insert ($place){
    $PIN_INSERT_SQL = "INSERT INTO trentose.places(name,description,picture,loc_street,loc_city,loc_state,loc_country,loc_latitude, loc_longitude)".
                      " values (:place_name, :place_description, :place_picture, :place_loc_street, :place_loc_city, :place_loc_state,:place_loc_country, :place_loc_latitude, :place_loc_longitude)";
    
    try {
        // open database
        $dbh = db_connect(); 

        $stmt = $dbh->prepare($PIN_INSERT_SQL); 

        $stmt->bindValue(':place_name', $place['name']);
        $stmt->bindValue(':place_description', $place['address']);
        $stmt->bindValue(':place_picture', $place['picture']);
        $stmt->bindValue(':place_loc_street', $place['street']);
	$stmt->bindValue(':place_loc_city', $place['city']);
	$stmt->bindValue(':place_loc_state', $place['state']);
	$stmt->bindValue(':place_loc_country', $place['country']);
	$stmt->bindValue(':place_loc_latitude', $place['latitude']);
	$stmt->bindValue(':place_loc_longitude', $place['longitude']);

        $stmt->execute();

        // close database
        $dbh = null;

    }
    catch(PDOException $e){
        echo $e->getMessage();
    }
}


function calculate_users_score($user,)
{
	
}



pin_load();
*/

?>
