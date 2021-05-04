import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-image-selection-container',
  styleUrl: 'sf-image-selection-container.css',
  shadow: true,
})
export class SfImageSelectionContainer {

  render() {
    return (
      <Host>
        <div class="bilder-container">
          <slot></slot>
        </div>
      </Host>
    );
  }

}
