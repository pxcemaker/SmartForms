import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-text-area',
  styleUrl: 'sf-text-area.css',
  shadow: true,
})
export class SfTextArea {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
