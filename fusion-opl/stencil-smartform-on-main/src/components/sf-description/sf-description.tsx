import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-description',
  styleUrl: 'sf-description.css',
  shadow: true,
})
export class SfDescription {

  @Prop({ reflect: true }) valueDescription: string;

  render() {
    return (
      <div class="description">
        <p>{'' + this.valueDescription}</p>
      </div>
    );
  }

}
