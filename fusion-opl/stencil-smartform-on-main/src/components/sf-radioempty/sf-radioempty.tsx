import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-radioempty',
  styleUrl: 'sf-radioempty.css',
  shadow: true,
})
export class SfRadioempty {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
