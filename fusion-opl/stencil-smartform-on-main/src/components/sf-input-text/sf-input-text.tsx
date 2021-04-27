import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-input-text',
  styleUrl: 'sf-input-text.css',
  shadow: true,
})
export class SfInputText {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
