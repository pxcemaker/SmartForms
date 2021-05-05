import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sf-image-selection',
  styleUrl: 'sf-image-selection.css',
  shadow: true,
})
export class SfImageSelection {

  @Prop({ reflect: true }) imageurl: string = "assets/img/ipadinhand.png";

  @Watch('imageurl')
  validateUrl(newValue: string) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    const hasContent = typeof newValue === 'string';
    if (isBlank) { throw new Error('name: required') };
    if (!hasContent) { throw new Error('name: hasContent') };
  }

  render() {
    return (
      <Host>
        <div class="bilder-kasten">
            <div class="bilder-content">
                <img src={this.imageurl}></img>
            </div>
        </div>
      </Host>
    );
  }

}
