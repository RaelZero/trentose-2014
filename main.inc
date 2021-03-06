<!DOCTYPE html>
<html>
    <head>
        <title>PinFood!</title>
        <meta charset="utf-8">

        <!-- stylesheet link -->
        <link rel="stylesheet" href="css/main.css">

        <!-- Fonts -->
        <link href='http://fonts.googleapis.com/css?family=Permanent+Marker' rel='stylesheet' type='text/css'>
        
        <!-- Linked libraries: JQuery, GMaps API -->
        <script type="text/javascript" src="lib/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" 
                src="https://maps.googleapis.com/maps/api/js?
                key=AIzaSyCgOGVYe_2bYYuYCn4DMdRwWpS950k9cME
                &sensor=FALSE"></script>
        
        <!-- Our scripts -->
        <script type="text/javascript" src="js/app.js"></script>
    </head>
    
    <body>
        <div class="overlay" > </div>
        <header>
            
            <img class="logo" src="img/amazing_logo.png" height="auto" width="auto" >
            <button class="click search"><img src="img/magnifierglass.svg"></button>
            <div class="popup_search">
                <form>
                    <p><span class="title">Nome</span> <input name="" type="text" /></p>
                    <p><span class="title">Città</span> <input name="" type="text" /></p>
                    <p><span class="title">Tags</span> <input name="" type="text" /></p>
                    <p><input name="" type="button" value="Cerca" /></p>
                </form>
            </div>
            
            <!-- Login subwindow-->
            <button class="click login">Login</button>
            <div class="popup_login">
                <form>
                    <p><input name="" type="button" value="Login" /></p>
                    <p><input name="" type="button" value="Crea Account" /></p>
                </form>
            </div>
            
            <button class="click"><img src="img/it.svg"/></button>
            <button class="click"><img src="img/uk.svg"/></button>
            
            <button class="click add"><img src="img/addpin.svg" /></button>
             <div class="popup_add">
                <form action="index.php" method="post">
                    <p><span class="title">Nome</span> <input name="name" type="text" /></p>
                    <p><span class="title">Indirizzo</span> <input name="loc_street" type="text" /></p>
                    <p><span class="title">Città</span> <input name="loc_city" type="text" /></p>
                    <p><span class="title">Contatto</span> <input name="loc_number" type="number" /></p>
                    <p><span class="title">Sito Web</span> <input name="website" type="url" /></p>
                    <p><span class="title">Tags</span> <input name="tags" type="text" /></p>
                    <p><span class="title">Lat</span> <input name="lat" type="text" value="" /></p>
                    <p><span class="title">Lng</span> <input name="lng" type="text" value="" /></p>
                    <p><input class="submit" name="add" type="submit" value="Aggiungi" /></p>
                </form>
            </div>
            
            <div class="popup_pin">
                <form>
                    <p><span class="title">Tags</span> <input name="" type="text" /></p>
                    <p><input name="" type="button" value="Aggiungi" /></p>
                </form>
            </div>
        </header>
        
        <div id="map">
        </div>
        
        <footer>Made in Trento, TESTWAFFE 2014</footer>
        
    </body>
</html>
