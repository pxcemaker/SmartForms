import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-imgselection',
  styleUrl: 'sf-imgselection.css',
  shadow: true,
})
export class SfImgselection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
