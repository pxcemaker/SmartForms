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
        <div class="spacetotop">
          <div class="checkbox-container">
            <div class="checkbox-kasten">
              <div class="checkbox-content">
                <input type="checkbox" id="a" name="a" checked></input>
                <label>Option A</label>
              </div>
            </div>

            <div class="checkbox-kasten">
              <div class="checkbox-content">
                <input type="checkbox" id="b" name="b" checked></input>
                <label>Option B</label>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
