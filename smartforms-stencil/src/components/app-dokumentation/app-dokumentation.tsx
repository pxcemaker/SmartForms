import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-dokumentation',
  styleUrl: 'app-dokumentation.scss',
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
