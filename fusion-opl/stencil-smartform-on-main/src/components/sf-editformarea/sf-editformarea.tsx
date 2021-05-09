import { Component, h, Method, State, Element } from '@stencil/core';

@Component({
  tag: 'sf-editformarea',
  styleUrl: 'sf-editformarea.css',
  shadow: true,
})
export class SfEditformarea {
  @State() dynFormMap: any[];
  @Element() el: HTMLElement;
  @Method()
  async getFormElement() {
    const questions = [];
    this.el.shadowRoot.querySelectorAll('sf-dynamicform').forEach(el => questions.push({ key: el.question, answetype: el.radio, value: el.result }));

    fetch('api.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(questions),
    }) /*.then(() => {
      window.location.href = '/abschlussseite-speichern.php';
    })*/;
  }

  constructor() {
    this.dynFormMap = [<sf-dynamicform></sf-dynamicform>];
  }

  addDyn() {
    console.log('jshgksdh');
    this.dynFormMap = [...this.dynFormMap, 'blubb'];
    console.log(JSON.stringify(this.dynFormMap));
  }

  /*safeSurvey() {
    console.log('DynFormMap: ' + this.dynFormMap);
    const umfrage = JSON.stringify(this.dynFormMap.map);
    console.log('umfrage Json: ' + umfrage);
    /*return fetch(phpFile).then(response => response.json).then()*/
  /*}*/

  render() {
    return (
      <div>
        {this.dynFormMap.map(() => {
          return <sf-dynamicform></sf-dynamicform>;
        })}

        <sf-adddynform value="+" id="addBtn" onIsClicked={() => this.addDyn()}></sf-adddynform>
        <a href="#" class="btn btn-common"
          onClick={() => {
            this.getFormElement();
          }}
        >
          Safe Survey
        </a>
      </div>
    );
  }
}
