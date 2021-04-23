import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-howto',
  styleUrl: 'app-howto.css',
  shadow: true,
})
export class AppHowto {
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
              <div class="col-lg-12">
                <ul>
                  <div class="services-item">
                    <div class="icon">
                      <i class="lni-users"></i>
                    </div>
                    <li class="oberpunkt">Konto</li>
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
                </ul>
              </div>

              <div class="col-lg-12">
                <ul>
                  <div class="services-item">
                    <div class="icon">
                      <i class="lni-stats-up"></i>
                    </div>
                    <li class="oberpunkt">Umfragen</li>
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
                </ul>
              </div>

              <div class="col-lg-12">
                <ul>
                  <div class="services-item">
                    <div class="icon">
                      <i class="lni-users"></i>
                    </div>
                    <li class="oberpunkt">Konto</li>
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
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
