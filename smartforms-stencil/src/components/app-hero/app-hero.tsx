import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-hero',
  styleUrl: 'app-hero.css',
  shadow: true,
})
export class AppHero {
  render() {
    return (
      <div>
        <div id="hero-area" class="hero-area-bg">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                <h2 class="head-title">
                  ONLINE
                  <br></br>
                  UMFRAGE
                  <br></br>
                  TOOL.
                </h2>
                <p>
                  Umfrage-Tool zur Messung von Marktforschung,
                  <br></br>
                  Kundenzufriedenheit, Mitarbeiterbeurteilung und
                  <br></br>
                  vieles mehr.
                </p>
                <div class="header-button">
                  <a href="#" class="btn btn-border" id="start-btn">
                    LOSLEGEN<i></i>
                  </a>
                </div>
              </div>

              <div class="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                <div class="intro-img">
                  <img class="img-fluid" src="assets/img/smartformBild.jpg" alt=""></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
