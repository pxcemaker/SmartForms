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

                <div class="spaceToPrior">
                    <sf-question value="Geschlecht?"></sf-question>
                    <div class="radio-kasten platzhalter">
                        <sf-radio class="platzhalter" value="Männlich"></sf-radio>
                        <sf-radio class="platzhalter" value="Weiblich"></sf-radio>
                        <sf-radio class="platzhalter" value="Divers"></sf-radio>
                    </div>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Dein Alter in Jahren"></sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Mir geht es..."></sf-question>
                    <div class="radio-kasten platzhalter">
                        <sf-radio class="platzhalter" value="gut"></sf-radio>
                        <sf-radio class="platzhalter" value="mittel">
                        </sf-radio>
                        <sf-radio class="platzhalter" value="schlecht">
                        </sf-radio>
                    </div>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Durch Corona fühle ich mich..."></sf-question>
                    <div class="radio-kasten platzhalter">
                        <sf-radio class="platzhalter" value="besser"></sf-radio>
                        <sf-radio class="platzhalter" value="wie immer"></sf-radio>
                        <sf-radio class="platzhalter" value="schlechter"></sf-radio>
                    </div>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Welche Faktoren belasten dich in der momentanen Situation mit Corona?">
                    </sf-question>

                    <sf-checkbox class="platzhalter" value="reduzierte soziale Kontakte"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Angst um die Gesundheit anderer"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Angst um die eigene Gesundheit"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="keine Möglichkeit Cafes, Bars oder Restaurants zu besuchen">
                    </sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Erschwertes lokales Einkaufen"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Das Einhalten einer höheren Anzahl an Hygieneregeln">
                    </sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Ungewissheit über eigene Impfsituation"></sf-checkbox>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Welche Strategien nutzt Du, um dich im Alltag trotz Corona gut zu fühlen?">
                    </sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Welche positiven Dinge kannst du für dich aus der Situation mit Corona ziehen?">
                    </sf-question>
                    <sf-checkbox class="platzhalter" value="Mehr Zeit mich auf mich selbst zu konzentrieren">
                    </sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Weniger Druck durch soziale Verpflichtungen"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Mehr selbstgekochtes Essen"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Mehr Zeit für (neue) Hobbys"></sf-checkbox>
                    <sf-checkbox class="platzhalter"
                        value="Mehr Kontakt zu Freunden und Bekannten, die weit entfernt wohnen"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Weniger Termine"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Andere halten an der Kasse mehr Abstand"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Mein technisches Wissen hat sich erweitert"></sf-checkbox>
                    <sf-checkbox class="platzhalter" value="Ich kann im Homeoffice arbeiten"></sf-checkbox>
                </div>

                <div class="spaceToPrior">
                    <sf-question value="Das würde ich mir im Zusammenhang mit Corona wünschen...">
                    </sf-question>
                    <sf-text-area class="platzhalter"></sf-text-area>
                </div>



            </div>
            <div class="spaceToPrior spaceToNext">
                <a href="abschlussseite-teilnahme.php" class="btn btn-common">Antwort speichern</a>
            </div>
        </div>
    </section>

    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>
    <!-- Footer Section End -->
</body>

</html>