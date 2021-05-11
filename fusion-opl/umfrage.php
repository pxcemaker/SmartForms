<!DOCTYPE html>
<html lang="en">

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
                        <h2 class="head-title"> <br> <br>UMFRAGE<br>ERSTELLEN.<br> </h2>
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
            <div class="row">
                <!-- <div class="checkbox-container"> -->
                <sf-editformarea></sf-editformarea>
                <!-- </div> -->

            </div>
        </div>
    </section>
    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>
    <!-- Footer Section End -->
</body>

</html>