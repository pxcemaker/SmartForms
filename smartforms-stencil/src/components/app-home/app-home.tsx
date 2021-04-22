import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true,
})
export class AppHome {
  render() {
    return (
      <div>
        <app-menu></app-menu>

        <section id="services" class="section-padding">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                HIGHLIGHTS
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>

            <div class="row">
              <div class="col-md-6 col-lg-3 col-xs-12">
                <div class="services-item wow fadeInRight" data-wow-delay="0.3s">
                  <div class="icon">
                    <i>
                      <img src="assets/img/Icons/icon_servic1-03.svg"></img>
                    </i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">kostenlos</a>
                    </h3>
                    <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 col-xs-12">
                <div class="services-item wow fadeInRight" data-wow-delay="0.6s">
                  <div class="icon">
                    <i>
                      <img src="assets/img/Icons/icon_servic2-03.svg"></img>
                    </i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">schöne Vorlagen</a>
                    </h3>
                    <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 col-xs-12">
                <div class="services-item wow fadeInRight" data-wow-delay="0.9s">
                  <div class="icon">
                    <i>
                      <img src="assets/img/Icons/icon_servic3-03.svg"></img>
                    </i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">intuitive Bedienung</a>
                    </h3>
                    <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                  </div>
                </div>
              </div>

              <div class="col-md-6 col-lg-3 col-xs-12">
                <div class="services-item wow fadeInRight" data-wow-delay="1.2s">
                  <div class="icon">
                    <i>
                      <img src="assets/img/Icons/icon_servic4-03.svg"></img>
                    </i>
                  </div>
                  <div class="services-content">
                    <h3>
                      <a href="#">easy Teilen</a>
                    </h3>
                    <p>Ut maximus enim dolor. Aenean auctor risus eget tincidunt lobortis. Donec tincidunt bibendum gravida. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-padding">
          <div class="container">
            <div class="row">
              <img src="assets/img/bildhome.png" width="1200"></img>
              <p>&nbsp;</p>
            </div>
          </div>
        </section>

        <section id="cta" class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                <div class="cta-text">
                  <img width="340" height="320px" src="assets/img/wolke.gif"></img>
                </div>
              </div>

              <div class="col-lg-6 col-md-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
                <br></br>
                <h6 class="wowleft">
                  {' '}
                  <b>Wie denkt dein Kunde?</b>{' '}
                </h6>
                <p class="wowleft">
                  Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Praesent imperdiet, tellus
                  et euismod euismod, risus lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Praesent imperdiet, tellus et euismod euismod, risus
                  lorem euismod erat, at finibus neque odio quis metus. Donec vulputate arcu quam. Praesent imperdiet, tellus et euismod euismod, risus lorem euismod erat, at
                  finibus neque odio quis metus. Donec vulputate arcu quam.
                </p>
                <a href="HowTo.html" class="btn btn-common mt-3 wowleft">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="container">
            <div class="row">
              <h2 id="sliderTitel">
                so könnte
                <br></br>
                deine Umfrage
                <br></br>
                aussehen
              </h2>
              <img src="assets/img/ipadinhand.PNG" id="slider"></img>
              <div class="container">
                <div class="row">
                  <div class="col-5"></div>
                  <div class="col-sm">
                    <a href="#">
                      {' '}
                      <i class="lni-arrow-left icon-arrow"></i>{' '}
                    </a>
                  </div>
                  <div class="col-sm">
                    <a href="#">
                      {' '}
                      <i class="lni-arrow-right icon-arrow"></i>{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section-padding eigeneSec">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-xs-12" data-wow-delay="0.3s">
                <div class="eigeneSec">
                  <h1 class="eigeneSec">
                    Erstelle jetzt deine
                    <br></br>
                    individuelle Umfrage!
                  </h1>
                  <a href="#" class="btn btn-common mt-3">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
