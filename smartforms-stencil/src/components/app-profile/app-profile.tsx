import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.scss',
  shadow: true,
})
export class AppProfile {
  @Prop() match: MatchResults;
  content: Umfrage[];

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }

    return '';
  }
  componentWillLoad() {
    return fetch('/assets/surveymock.json')
      .then(response => response.json())
      .then(data => {
        this.content = data;
        console.log(this.content);
      });
  }
  render() {
    if (this.match && this.match.params.name) {
      return (
        <div>
          <app-menu></app-menu>
          <div class="profilearea">
            <div class="profilegridcontainer container">
              <div class="profile-grid-item">
                <div class="profilepicture">
                  <i class="bi bi-person" style={{ fontSize: '12rem', color: '#707070' }}></i>
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
                <button class="btn btn-common settings">Profildaten bearbeiten</button>
              </div>
            </div>
          </div>

          <div class="container">
            <div>
              <h1>
                Umfragen <br />
                Übersicht
              </h1>
            </div>

            <div class="survey-grid-container">
              <div class="survey-grid-item">
                <a href="beispielseite-2.html">
                  <div class="surveyplate empty-plate">
                    <p class="empty-plus">+</p>
                  </div>
                </a>
              </div>
            </div>

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

          <div class="app-profile">
            <div class="container">
              <div id="profilesection" class="row">
                <div class="col-sm-4">
                  <div id="profilepicture"></div>
                </div>
                <div class="col-sm-6">
                  <div id="profiletext">
                    <p id="username">Username</p>
                    <p id="usermail">usermail@e-mail.de</p>
                    <button id="" class="btn btn-secondary btn-sm">
                      Profil bearbeiten
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="container">
              <h1>
                Umfragen<br></br>Übersicht
              </h1>
              <div id="newsurveybutton" class="surveyelement">
                <p>+</p>
              </div>
              <div id="overview" class="row">
                {this.content.map(umfrage => (
                  <div class="col-sm">
                    <div class="onesurveyelement surveyelement"></div>
                    <div class="surveyelementtext surveyelement">
                      <div>
                        <h2>{umfrage.title}</h2>
                      </div>
                      <div>
                        <p>{umfrage.numberOfQuestions} Fragen</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
          </div>
        </div>
      );
    }
  }
}

class Umfrage {
  userId: number;
  id: number;
  title: string;
  numberOfQuestions: number;
  creationDate: string;
  lastEdited: string;
  status: string;
}
