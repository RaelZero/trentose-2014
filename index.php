<!DOCTYPE html>
<html>
    <head>
        <title>PinFood!</title>
        <meta charset="utf-8">

        <!-- stylesheet link -->
        <link rel="stylesheet" href="css/main.css">
        
        <!-- Linked libraries: JQuery, GMaps API -->
        <script type="text/javascript" src="lib/jquery-2.1.1.min.js"></script>
        <script type="text/javascript" 
                src="https://maps.googleapis.com/maps/api/js?
                key=AIzaSyCgOGVYe_2bYYuYCn4DMdRwWpS950k9cME
                &sensor=FALSE"></script>
        
        <!-- Our scripts -->
        <script type="text/javascript" src="js/script.js"></script>
        <script type="text/javascript" src="js/gmaps.js"></script>
    </head>
    <body>
        <header>
            <img class="logo" src="img/amazing_logo.png" height="auto" width="auto" >
            <button class="click"><img src="img/magnifierglass.svg" width="auto" height="30px"></button>
            <button class="click login"><a href="#" >Login</a>
                <div class="popup">
                <a href="#" class="close">CLOSE</a>
                <form>
                    <P><span class="title">Username</span> <input name=""       type="text" /></P>
                    <P><span class="title">Password</span> <input name="" type="password" /></P>
                    <P><input name="" type="button" value="Login" /></P>
                </form>
    
                </div>
            </button>
            <button class="click"><img src="img/it.svg" width="50px" height="auto" /></button>
            <button class="click"><img src="img/uk.svg" width="50px" height="auto" /></button>
            <button class="click"><img src="img/addpin.svg" width="auto" height="35px" /></button>
        </header>
        <div id="mapframe">
            <div id="map-canvas" />
        </div>
        
        <footer>Made in Trento, TESTWAFFE 2014</footer>
    </body>
</html>