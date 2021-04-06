import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dokumentation',
  styleUrl: 'app-dokumentation.css',
  shadow: true,
})
export class AppDokumentation {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
