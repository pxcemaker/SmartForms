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

  render() {
    return (
      <div>
        {this.dynFormMap.map(() => {
          return <sf-dynamicform></sf-dynamicform>;
        })}

        <sf-adddynform onIsClicked={() => this.addDyn()}></sf-adddynform>
      </div>
    );
  }
}
