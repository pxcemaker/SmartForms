<?php require("head.uebersicht.inc.php"); ?>

<body>
    <!-- Header Area wrapper Starts -->
    <header id="header-wrap">
        <!-- Navbar Start -->
        <?php require("nav.inc.php"); ?>
        <!-- Navbar End -->

        <!-- Hero Area Start -->

        <!-- Hero Area End -->
    </header>

    <div class="profilearea">
        <div class="profilegridcontainer container">
            <div class="profile-grid-item">
                <div class="profilepicture">
                    <i class="bi bi-person" style="font-size: 12rem; color: #707070"></i>
                </div>
            </div>
            <div class="profile-grid-item">
                <div class="profiletexts">
                    <p id="username">Max Mustermann</p>
                    <p class="userdata">max-mustermann@mustermann.de</p>
                    <p class="userdata">MaxiM</p>
                </div>
            </div>
            <div class="profile-grid-item">
                <button class="btn btn-common settings">Profilbild bearbeiten</button>
            </div>
            <div class="profile-grid-item">
                <button class="btn btn-common settings">
                    Profildaten bearbeiten
                </button>
            </div>
        </div>
    </div>

    <!-- Header Area wrapper End -->
    <div class="container">
        <div>
            <h1>
                Umfragen <br />
                Übersicht
            </h1>
        </div>

        <sf-addformbutton></sf-addformbutton>

        <div class="survey-grid-container">
       <div class="survey-grid-item">
                <div class="surveyplate first-plate">
                    <div class="icons">
                        <i class="lni-pencil"></i>
                        <i class="lni-upload"></i>
                        <i class="lni-search"></i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">15 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate second-plate">
                    <div class="icons">
                        <i class="lni-pencil"></i>
                        <i class="lni-upload"></i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">15 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate third-plate">
                    <div class="icons">
                        <i class="lni-pencil"></i>
                        <i class="lni-upload"></i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">15 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate fourth-plate">
                    <div class="icons">
                        <i class="lni-pencil"></i>
                        <i class="lni-search"></i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">15 Fragen</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>
</body>

</html>