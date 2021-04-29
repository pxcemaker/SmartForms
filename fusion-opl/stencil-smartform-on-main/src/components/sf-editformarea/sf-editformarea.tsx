import { Component, Watch, h, State } from '@stencil/core';

@Component({
  tag: 'sf-editformarea',
  styleUrl: 'sf-editformarea.css',
  shadow: true,
})
export class SfEditformarea {
  @State() addForm: boolean;

  @Watch('addForm')
  returnNewQuestion() {
    if (this.addForm) {
      this.addForm = false;
      console.log(this.addForm);
      return <sf-dynamicform></sf-dynamicform>;
    }
  }

  render() {
    return (
      <div>
        <sf-dynamicform></sf-dynamicform>
        {this.returnNewQuestion()}
        <sf-adddynform onAddDynForm={ev => (this.addForm = ev.detail)}></sf-adddynform>
      </div>
    );
  }
}
