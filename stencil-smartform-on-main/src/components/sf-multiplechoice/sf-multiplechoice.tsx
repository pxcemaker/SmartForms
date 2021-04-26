import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-multiplechoice',
  styleUrl: 'sf-multiplechoice.css',
  shadow: true,
})
export class SfMultiplechoice {
  render() {
    return (
      <Host>
        <div class="checkbox-container">
          <div class="checkbox-kasten">
            <div class="checkbox-content">
              <input type="text" name="textfeld" placeholder="Gib hier deinen Text ein..." required></input>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
