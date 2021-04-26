import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-uploadbutton',
  styleUrl: 'sf-uploadbutton.css',
  shadow: true,
})
export class SfUploadbutton {

  render() {
    return (
      <Host>
        <input type="file" id="actual-btn"/>    
        <label htmlFor="actual-btn">No file chosen</label>
      </Host>
    );
  }

}
