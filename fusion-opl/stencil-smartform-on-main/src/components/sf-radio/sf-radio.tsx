import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-radio',
  styleUrl: 'sf-radio.css',
  shadow: true,
})
export class SfRadio {
  @Prop({ reflect: true }) value: string;

  render() {
    return (
      <div>
        <div class="checkbox-content">
          <input type="radio" id="radio-1" name="radio" checked></input>
          <label>{'' + this.value}</label>
        </div>
      </div>
    );
  }
}
