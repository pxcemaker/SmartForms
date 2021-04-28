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
        <div class=" grid-container checkbox-kasten">
          <sf-question></sf-question>
          <sf-checkbox></sf-checkbox>
          <sf-checkbox></sf-checkbox>
          <sf-checkbox></sf-checkbox>
          <sf-checkbox></sf-checkbox>
        </div>
      </Host>
    );
  }
}
