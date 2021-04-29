import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-radio',
  styleUrl: 'sf-radio.css',
  shadow: true,
})
export class SfRadio {
  @Prop({ reflect: true }) value: string;
  @Prop() radioName: string;
  @Prop() radioId: string;

  render() {
    return (
      <div>
        <div class="checkbox-content">
          <input type="radio" id={this.radioId} name={this.radioName}></input>
          <label>{'' + this.value}</label>
        </div>
      </div>
    );
  }
}
