import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'upload-button',
  styleUrl: 'upload-button.css',
  shadow: true,
})
export class UploadButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
