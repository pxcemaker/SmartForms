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
    this.el.shadowRoot.querySelectorAll('sf-dynamicform').forEach(el => questions.push(el.question));
    return questions;
  }

  constructor() {
    this.dynFormMap = [<sf-dynamicform></sf-dynamicform>];
  }

  addDyn() {
    console.log('jshgksdh');
    this.dynFormMap = [...this.dynFormMap, 'blubb'];
  }

  safeSurvey() {
    console.log('DynFormMap: ' + this.dynFormMap);
    const umfrage = JSON.stringify(this.dynFormMap.map);
    console.log('umfrage Json: ' + umfrage);
    /*return fetch(phpFile).then(response => response.json).then()*/
  }

  render() {
    return (
      <div>
        {this.dynFormMap.map(() => {
          return <sf-dynamicform></sf-dynamicform>;
        })}

        <sf-adddynform value="+" id="addBtn" onIsClicked={() => this.addDyn()}></sf-adddynform>
        <sf-adddynform value="safe" id="safeBtn" onIsClicked={() => this.safeSurvey()}></sf-adddynform>
      </div>
    );
  }
}
