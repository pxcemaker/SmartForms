import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-faq',
  styleUrl: 'app-faq.scss',
  shadow: true,
})
export class AppFaq {
  render() {
    return (
      <div>
        <app-menu></app-menu>
        <section id="services" class="section-padding">
          <div class="container">
            <div class="section-header text-center">
              <h2 class="section-title wow fadeInDown" data-wow-delay="0.3s">
                Hier ist unser FAQ Übersicht!
              </h2>
              <div class="shape wow fadeInDown" data-wow-delay="0.3s"></div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="services-item ">
                  <button class="accordion">Wie sende ich meine Umfragen weiter?</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="services-item">
                  <button class="accordion">Section 1</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="services-item">
                  <button class="accordion">Section 1</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="services-item">
                  <button class="accordion">Section 1</button>
                  <div class="panel">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
