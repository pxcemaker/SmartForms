import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-faq',
  styleUrl: 'app-faq.scss',
  shadow: true,
})
export class AppFaq {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
