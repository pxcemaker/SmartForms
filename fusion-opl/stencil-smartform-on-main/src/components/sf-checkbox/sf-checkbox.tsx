import { Component, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sf-checkbox',
  styleUrl: 'sf-checkbox.css',
  shadow: true,
})
export class SfCheckbox {
  @Prop({ reflect: true }) value: string;

  render() {
    return (
      <div class="grid-item checkbox-kasten">
        <label class="container">
          {'' + this.value}
          <input type="checkbox"></input>
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}
