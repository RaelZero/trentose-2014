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
        <script type="text/javascript" src="js/app.js"></script>
        <!--<script type="text/javascript" src="js/gmaps.js"></script>-->
    </head>
    
    <body>
        <div class="overlay" > </div>
        <header>
            
            <img class="logo" src="img/amazing_logo.png" height="auto" width="auto" >
            <button class="click search"><img src="img/magnifierglass.svg" width="auto" height="30px"></button>
            <div class="popup_search">
                <form>
                    <p><span class="title">Nome</span> <input name="" type="text" /></p>
                    <p><span class="title">Città</span> <input name="" type="text" /></p>
                    <p><span class="title">Tags</span> <input name="" type="text" /></p>
                    <p><input name="" type="button" value="Cerca" /></p>
                </form>
            </div>
            
            <!-- Login subwindow -->
            <button class="click login">Login</button>
            <div class="popup_login">
                <form>
                    <p><span class="title">Username</span> <input name="" type="text" /></p>
                    <p><span class="title">Password</span> <input name="" type="password" /></p>
                    <p><input name="" type="button" value="Login" /></p>
                    <p><input name="" type="button" value="Crea Account" /></p>
                </form>
            </div>
            
            <button class="click"><img src="img/it.svg" width="50px" height="auto" /></button>
            <button class="click"><img src="img/uk.svg" width="50px" height="auto" /></button>
            
            <button class="click add"><img src="img/addpin.svg" width="auto" height="35px" /></button>
             <div class="popup_add">
                <form>
                    <p><span class="title">Nome</span> <input name="" type="text" /></p>
                    <p><span class="title">Indirizzo</span> <input name="" type="text" /></p>
                    <p><span class="title">Città</span> <input name="" type="text" /></p>
                    <p><span class="title">Contatto</span> <input name="" type="number" /></p>
                    <p><span class="title">Sito Web</span> <input name="" type="url" /></p>
                    <p><span class="title">Tags</span> <input name="" type="text" /></p>
                    <p><input name="" type="button" value="Aggiungi" /></p>
                </form>
            </div>
            <div class="pin"> <img src="img/map-pin-red.svg" width="auto" height="35px" />
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