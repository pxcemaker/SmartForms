<?php require("head.inc.php"); ?>

<body>

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
                        <div class="contents">
                            <h2 class="head-title">Fragen? <br>Hier sind Antworten!</h2>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                        <div class="intro-img">
                            <img class="img-fluid" src="assets/img/intro-mobile.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Hero Area End -->

    </header>
    <section id="services" class="section-padding">
        <div class="container">
            <div class="section-header text-center">
                <h1 class="section-title wow fadeInDown" data-wow-delay="0.3s">Übersicht</h1>
                <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <h2> <a href="#accordions"> Direkt zu häufig gestellten Fragen </a> </h2>
            <div class="row">
                <div class="col-lg-12">
                    <ul>
                        <div class="services-item">
                            <div class="icon">
                                <i class="lni-users"></i>
                            </div>
                            <li class="oberpunkt">
                                Konto
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Account anlegen</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Accountdaten ändern</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Account teilen</a>
                            </li>
                        </div>
                </div>
                <div class="col-lg-12">
                    <ul>
                        <div class="services-item">
                            <div class="icon">
                                <i class="lni-stats-up"></i>

                            </div>
                            <li class="oberpunkt">
                                Umfragen
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Umfrage erstellen</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Template aussuchen</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Hintergrund ändern</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Bilder hochladen</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#">Fragen erstellen</a>
                            </li>
                        </div>
                </div>
                <div class="col-lg-12">
                    <ul>
                        <div class="services-item">
                            <div class="icon">
                                <i class="lni-users"></i>
                            </div>
                            <li class="oberpunkt">
                                Konto
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Account anlegen</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Accountdaten ändern</a>
                            </li>
                            <li class="unterpunkt">
                                <a href="#"> Account teilen</a>
                            </li>
                        </div>
                </div>
            </div>


            </ul>

        </div>
        </div>
        </div>

        </div>
        </div>
    </section>
    <!-- Header Area wrapper End -->
    <section id="accordions" class="section-padding">
        <div class="container">
            <div class="section-header text-center">
                <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">Hier ist unser FAQ Übersicht!</h2>
                <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <div class="services-item ">
                        <button class="accordion">Wie sende ich meine Umfragen weiter?</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="services-item">
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="services-item">
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="services-item">
                        <button class="accordion">Section 1</button>
                        <div class="panel">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>

</body>
<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
</script>

</html>