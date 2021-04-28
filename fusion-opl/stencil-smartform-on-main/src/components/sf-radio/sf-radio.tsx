import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-radio',
  styleUrl: 'sf-radio.css',
  shadow: true,
})
export class SfRadio {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
