<?php

function db_connect()
{
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
function pin_insert ($place){
    $PIN_INSERT_SQL = "INSERT INTO places(name, address, lat, lng)".
                      " values (:place_name, :place_address, :place_lat, :place_lng)";
    
    try {
        // open database
        $dbh = db_connect(); 
        
        $stmt = $dbh->prepare($PIN_INSERT_SQL); 
        
        $stmt->bindValue(':place_name', $place['name']);        
        $stmt->bindValue(':place_address', $place['address']);
        $stmt->bindValue(':place_lat', $place['lat']);
        $stmt->bindValue(':place_lng', $place['lng']);                
        
        $stmt->execute();        
        
        // close database
        $dbh = null;
        
    }
    catch(PDOException $e){
        echo $e->getMessage();
    } 
} 
  
*/

pin_load();
 
?>
