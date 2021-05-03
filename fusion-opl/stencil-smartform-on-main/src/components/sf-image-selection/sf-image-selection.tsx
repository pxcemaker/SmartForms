import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-image-selection',
  styleUrl: 'sf-image-selection.css',
  shadow: true,
})
export class SfImageSelection {

  @Prop() imageURL: string;

  render() {
    return (
      <Host>
        <div class="bilder-kasten">
            <div class="bilder-content">
                <img src={this.imageURL}></img>
            </div>
        </div>
      </Host>
    );
  }

}
