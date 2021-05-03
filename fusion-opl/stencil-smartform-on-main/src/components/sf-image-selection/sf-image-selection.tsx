import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-image-selection',
  styleUrl: 'sf-image-selection.css',
  shadow: true,
})
export class SfImageSelection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
