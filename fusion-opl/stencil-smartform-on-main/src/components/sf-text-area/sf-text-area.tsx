import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-text-area',
  styleUrl: 'sf-text-area.css',
  shadow: true,
})
export class SfTextArea {
  @Prop() fragenId: string;
  @Prop() onOff: string;
  @Prop() frageText: string;

  render() {
    return (
      <Host>
        <div class="mehrzeilig-container">
          <div class="mehrzeilig-kasten">
            <div class="mehrzeilig-content">
              <textarea placeholder="Gib hier deinen Text ein..." class={this.onOff}></textarea>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
