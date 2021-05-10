<?php
include_once 'includes/dbh.inc.php';
?> 

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
              <sf-question value="Das ist meine Frage"></sf-question>
              <sf-text-area></sf-text-area>
              <sf-checkbox value="was auch immmer da stehen soll"></sf-checkbox>


              <sf-image-selection-container>
                <sf-image-selection imageurl="assets/img/ipadinhand.png"></sf-image-selection>
                <sf-image-selection imageurl="assets/img/ipadinhand.png"></sf-image-selection>
                <sf-image-selection imageurl="assets/img/ipadinhand.png"></sf-image-selection>
                <sf-image-selection imageurl="assets/img/ipadinhand.png"></sf-image-selection>
              </sf-image-selection-container>
              <sf-empty-image-selection></sf-empty-image-selection>
            </div>
            <a href="abschlussseite-teilnahme.php" class="btn btn-common">Antwort speichern</a>
        </div>
    </section>
    
  <!-- Footer Section Start -->
  <footer id="footer" class="footer-area section-padding">
    <div class="container">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
            <div class="widget">
              <h3 class="footer-logo"><img src="assets/img/smartform-logo-grey.png" alt=""></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          </div>
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <div class="textwidget">
              <p><a href="impressum.html">IMPRESSUM</a> / <a href="datenschutz.html">DATENSCHUTZ</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="copyright-content">
              <p>Copyright © 2020 <a rel="nofollow" href="https://uideck.com">UIdeck</a> All Right
                Reserved</p>
              <p>https://onepagelove.com/fusion-lite</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</body>

</html>