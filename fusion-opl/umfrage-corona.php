<!DOCTYPE html>
<html lang="en">
<style>
.platzhalter {
    margin: 5px;
    display: block;
    width: 50%;
}
</style>

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <title>SmartForm</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">

    <link rel="stylesheet" href="assets/css/umfrage.css">

    <!-- von Stencil Projekt -->
    <script src="stencil-smartform-on-main/dist/stencil-smartform-on/stencil-smartform-on.esm.js" type="module">
    </script>
    <link rel="stylesheet" href="stencil-smartform-on-main/dist/stencil-smartform-on/stencil-smartform-on.css" />

</head>

<body>
    <!--  $conn ----Wenn man sich mit dem live mySQL verbinden möchte darf das $conn nicht auskommentiert bleiben -->
    <!-- Header Area wrapper Starts -->

    <header id="header-wrap">
        <!-- Navbar Start -->
        <?php require("nav.inc.php"); ?>
        <!-- Navbar End -->


        <!-- Hero Area Start -->
        <div id="hero-area" class="hero-area-bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                        <!-- <div class="contents"> -->
                        <h2 class="head-title"> <br> <br>CORONA<br>UMFRAGE<br> </h2>
                        <!-- <p>Umfrage-Tool zur Messung von Marktforschung, <br>Kundenzufriedenheit, Mitarbeiterbeurteilung und <br>vieles mehr.</p> -->
                        <!-- <div class="header-button">
                  <a href="#" class="btn btn-border" id="start-btn">LOSLEGEN</i></a>
                </div> -->
                        <!-- </div> -->
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div class="intro-img">
                            <img class="img-fluid" src="../img/smartformBild.jpg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero Area End -->

    </header>


    <section id="services" class="section-padding">
        <div class="container">
            <div class="column">
                <!-- <div class="checkbox-container"> -->
                <!--<sf-editformarea></sf-editformarea> -->
                <!-- </div> -->
                <sf-title tvalue="Erhebung zum Thema Corona - Die Gefühlslage in Coronazeiten"></sf-title>

                <sf-question value="Geschlecht?"></sf-question>
                <div class="radio-kasten platzhalter">
                    <sf-radio class="platzhalter" value="Männlich"></sf-radio>
                    <sf-radio class="platzhalter" value="Weiblich"></sf-radio>
                    <sf-radio class="platzhalter" value="Divers"></sf-radio>
                </div>

                <sf-question value="Dein Alter in Jahren"></sf-question>
                <sf-text-area class="platzhalter"></sf-text-area>

                <sf-question value="Mir geht es..."></sf-question>
                <sf-checkbox class="platzhalter" value="gut"></sf-checkbox>
                <sf-checkbox class="platzhalter" value="mittel"></sf-checkbox>
                <sf-checkbox class="platzhalter" value="schlecht"></sf-checkbox>

                <<<<<<< HEAD <sf-question value="Durch Corona fühle ich mich...">
                    </sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>
                    =======
                    >>>>>>> c88ae1d0488c27fac3795f2af8aaa7e3f76d7d9b

                    <sf-question value="Welche Strategien setzt Du ein, um mit Corona umzugehen?"></sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>

                    <sf-question value="Durch Corona fühle ich mich..."></sf-question>
                    <sf-radio class="platzhalter" value="wohl"></sf-radio>
                    <sf-radio class="platzhalter" value="neutral"></sf-radio>
                    <sf-radio class="platzhalter" value="unwohl"></sf-radio>

                    <sf-question value="Welche Strategien nutzt Du, um dich im Alltag gut zu fühlen?"></sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>

                    <sf-question class="platzhalter" value="Wegen Corona bin ich…"></sf-question>
                    <sf-checkbox class="platzhalter" value="entspannt"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="neutral"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="gestresst"></sf-checkbox>

            </div>
            <a href="abschlussseite-teilnahme.php" class="btn btn-common">Antwort speichern</a>
        </div>
    </section>

    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>
    <!-- Footer Section End -->
</body>

</html>