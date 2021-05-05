import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sf-editformarea',
  styleUrl: 'sf-editformarea.css',
  shadow: true,
})
export class SfEditformarea {
  @State() dynFormMap: any[];

  constructor() {
    this.dynFormMap = [<sf-dynamicform></sf-dynamicform>];
  }

  addDyn() {
    console.log('jshgksdh');
    this.dynFormMap = [...this.dynFormMap, 'blubb'];
  }

  safeSurvey() {}

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
