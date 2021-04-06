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
      .then((response) => response.json())
      .then(data => {
        this.content = data;
        console.log(this.content);
      });
  }
  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          {this.content.map((umfrage) =>
        <div>
          <div>{umfrage.title}</div>
          <div>{umfrage.body}</div>
        </div>
      )}
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
