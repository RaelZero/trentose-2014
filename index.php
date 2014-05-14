<!DOCTYPE html>
<html>
    <head>
        <title>Mega sito tipo TripAdvisor!</title>
        <meta charset="utf-8">
        
        <link rel="stylesheet" href="css/main.css">
        <script src="script.js"></script>

    </head>
    <body>
        <header>
            <span>PinFood</span>
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
            <iframe id="map"
                frameborder="0" style="border:0"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCgOGVYe_2bYYuYCn4DMdRwWpS950k9cME
                &q=Venezia,Italy" >
            </iframe>
        </div>
        
        <footer>Made in Trento, TESTWAFFE 2014</footer>
    </body>
</html>