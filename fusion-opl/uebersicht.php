<?php require("head.uebersicht.inc.php"); ?>

<body>
    <!-- Header Area wrapper Starts -->
    <header id="header-wrap">
        <!-- Navbar Start -->
        <?php require("nav.inc.php"); ?>
        <!-- Navbar End -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
       
    </header>

    <div class="profilearea">
        <div class="profilegridcontainer container">
            <div class="profile-grid-item">
                <div class="profilepicture">
                <img src="assets/img/maxmustermann.png" width="208" height="auto"></img>
                    <!-- <i class="bi bi-person" style="font-size: 12rem; color: #707070"></i> -->
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
                <button  id ="bild" class="btn btn-common settings">Profilbild bearbeiten</button>
            </div>
            <div id="daten" class="profile-grid-item">
                <button class="btn btn-common settings">
                    Profildaten bearbeiten
                </button>
            </div>
        </div>
    </div>

    <!-- Header Area wrapper End -->

    <!-- body 1 start -->
    <div class="container">
        <div>
            <h1>
                Umfragen Übersicht
            </h1>
        </div>

        <sf-addformbutton></sf-addformbutton>
        <h2>
          unveröffentlichte Umfragen
            </h2>
        <div class="survey-grid-container">
        
       <div class="survey-grid-item">
                <div class="surveyplate first-plate">
                    <div class="icons">
                    <i class="material-icons"  id="write1" style="font-size:40px;">mode</i>
                    <i class="material-icons"  id="share" style="font-size:35px;">share</i>
                    
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">7 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate second-plate">
                    <div class="icons">
                    <i class="material-icons" id="write" style="font-size:40px;">mode</i>
                    <i class="material-icons"  id="share"style="font-size:35px;">share</i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">4 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate third-plate">
                    <div class="icons">
                    <i class="material-icons"  id="write" style="font-size:40px;">mode</i>
                    <i class="material-icons"  id="share"style="font-size:35px;">share</i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">2 Fragen</p>
                </div>
            </div>
            
        </div>
    </div>
    </div>

 <!-- body 2 start -->
    <div class="container">
    

        
        <h2>
         veröffentlichte Umfragen
            </h2>
        <div class="survey-grid-container">
        
       <div class="survey-grid-item">
                <div class="surveyplate first-plate">
                    <div class="icons">
                    <i class="material-icons" id="write" style="font-size:40px;">mode</i>
                    <i class="material-icons"  id="share"style="font-size:35px;">share</i>
                    <i class="material-icons"  id="bar" style="font-size:45px;">bar_chart</i>
                    </div>
                </div>
                <div class="survey-texts">
                   <a href="umfrage-corona.php"> <p class="survey-title">Corona Umfrage</p> </a>
                    <p class="number-questions">12 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate second-plate">
                    <div class="icons">
                    <i class="material-icons" id="write" style="font-size:40px;">mode</i>
                    <i class="material-icons"  id="share"style="font-size:35px;">share</i>
                    <i class="material-icons"  id="bar"style="font-size:45px;">bar_chart</i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">15 Fragen</p>
                </div>
            </div>
            
        </div>
    </div>
    </div>

     <!-- body 3 start -->
     <div class="container">
    
        <h2>
         beendete Umfragen
            </h2>
        <div class="survey-grid-container">
        
       <div class="survey-grid-item">
                <div class="surveyplate first-plate">
                    <div class="icons">
                    <i class="material-icons"  id="bar" style="font-size:45px;">bar_chart</i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">10 Fragen</p>
                </div>
            </div>
            <div class="survey-grid-item">
                <div class="surveyplate second-plate">
                    <div class="icons">
                    <i class="material-icons" id="bar" style="font-size:45px;">bar_chart</i>
                    </div>
                </div>
                <div class="survey-texts">
                    <p class="survey-title">Thema der Umfrage</p>
                    <p class="number-questions">14 Fragen</p>
                </div>
            </div>
            
        </div>
    </div>
    </div>
    <!-- Footer Section Start -->
    <?php include("footer.inc.php"); ?>
</body>
<script src="uebersicht.ts" defer> 
    document.querySelector('#write1').addEventListener("click", alertWrite) 

function alertWrite(){
   alert("ALERT WRITE")
    console.log("TEST123")
}</script>
</html>