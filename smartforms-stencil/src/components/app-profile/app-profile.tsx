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
