import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-empty-image-selection',
  styleUrl: 'sf-empty-image-selection.css',
  shadow: true,
})
export class SfEmptyImageSelection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
