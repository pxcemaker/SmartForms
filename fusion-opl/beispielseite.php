<?php require("head.inc.php"); ?>

<body>
    <section id="checkboxen" class="section-padding beispielcontainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="cta-text">
                        <h2>Wir sind Checkboxen</h2>
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                        Checked checkbox
                    </label>
                </div>
            </div>
        </div>
    </section>

    <section id="range" class="section-padding beispielcontainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="cta-text">
                        <h2>Wir sind Ranges</h2>
                    </div>
                </div>
                <label for="customRange1" class="form-label">Range ohne Steps</label>
                <input type="range" class="form-range" id="customRange1">

                <label for="customRange2" class="form-label">Range mit Steps</label>
                <input type="range" class="form-range" min="0" max="5" id="customRange2">
            </div>
        </div>
    </section>

    <section id="range" class="section-padding beispielcontainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="cta-text">
                        <h2>Wir sind Radiobuttons</h2>
                    </div>
                </div>
                <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked>
                <label class="btn btn-secondary" for="option1">Checked</label>

                <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off">
                <label class="btn btn-secondary" for="option2">Radio</label>

                <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" disabled>
                <label class="btn btn-secondary" for="option3">Disabled</label>

                <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off">
                <label class="btn btn-secondary" for="option4">Radio</label>
            </div>
        </div>
    </section>

    <section id="range" class="section-padding beispielcontainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="cta-text">
                        <h2>Wir sind auch</h2>
                    </div>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Default radio
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Default checked radio
                    </label>
                </div>
            </div>
        </div>
    </section>

    <section id="range" class="section-padding beispielcontainer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                    <div class="cta-text">
                        <h2>Wir sind Textfelder</h2>
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-group-text">With textarea</span>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Textfeld</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                        aria-describedby="basic-addon1">
                </div>
            </div>
        </div>
    </section>
    <?php include("footer.inc.php"); ?>
</body>

</html>