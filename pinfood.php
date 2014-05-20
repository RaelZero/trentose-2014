<?php

function db_connect(){
    $host = "localhost";
    $dbname = "trentose";
    $user = "trentose";
    $pass = "CYQhjxVc6JF5LY5c";

    return new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    echo("Now connected to DB.\n");
}


function pin_load (){//non sono un cazzo sicuro che vada con le natural join(ristrutturare con where)
    $PIN_LOAD_SQL = "select * from places";
    try {
        // open database
        $dbh = db_connect();   

        $fp = fopen('pins.json', 'w');
        foreach ($dbh->query($PIN_LOAD_SQL) as $row){
            fwrite($fp, json_encode($row));            
        }
        
        fclose($fp);
        echo("Finished writing on JSON file, now availible at pins.json\n");

        // close database
        $dbh = null;
    }
    catch(PDOException $e){
        echo $e->getMessage();
    } 
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
