import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-impressum',
  styleUrl: 'app-impressum.css',
  shadow: true,
})
export class AppImpressum {
  render() {
    return (
      <div>
        <app-menu></app-menu>
        <div class="container">
          <div class="row">
            <div class="site-heading">
              <h3 class="section-title"></h3>
              <div>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>
                  Smartform, DHBW Mosbach
                  <br />
                  Lohrtalweg 10
                  <br />
                  74821 Mosbach
                </p>

                <p>
                  <strong>Vertreten durch:</strong>
                  <br />
                  Fabienne Nieft
                </p>

                <h2>Kontakt</h2>
                <p>
                  Telefon: 06261 / 939-0
                  <br />
                  E-Mail: Fabienne.nieft@gmx.de
                </p>

                <h2>Umsatzsteuer-ID</h2>
                <p>
                  Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
                  <br />
                  DE999999999
                </p>

                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>
                  Quelle: <a href="https://www.e-recht24.de">e-recht24.de</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
