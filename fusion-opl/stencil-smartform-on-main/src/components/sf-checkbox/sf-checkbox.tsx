import { Component, h } from '@stencil/core';

@Component({
  tag: 'sf-checkbox',
  styleUrl: 'sf-checkbox.css',
  shadow: true,
})
export class SfCheckbox {
  render() {
    return (
      <div class="grid-item checkbox-kasten">
        <label class="container">
          Four
          <input type="checkbox"></input>
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}
