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
        <input type="text" name="textfeld" placeholder="Gib hier deinen Text ein..." required></input>      
      </Host>
    );
  }

}
