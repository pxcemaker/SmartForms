import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
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
    return fetch('/assets/blubb.json')
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
          <div id="profilesection">
            <div class="contentcontainer">
              <div id="profilepicture"></div>
              <div id="profiletext">
                <p id="username">Username</p>
                <p id="usermail">usermail@e-mail.de</p>
                <button id="">Profil bearbeiten</button>
              </div>
            </div>
          </div>
          <div class="contentcontainer">
            <div id="overview">
              <h1>
                Umfragen<br></br>Übersicht
              </h1>
              {this.content.map(umfrage => (
                <div class="onesurveyelement">
                  <div>{umfrage.title}</div>
                  <div>{umfrage.body}</div>
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
  body: string;
}
