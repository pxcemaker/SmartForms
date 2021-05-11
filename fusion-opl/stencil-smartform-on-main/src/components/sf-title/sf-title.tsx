import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-title',
  styleUrl: 'sf-title.css',
})
export class SfTitle {

  @Prop({ reflect: true }) tvalue: string;

  render() {
    return (
      <div class="title">
        <p>{'' + this.tvalue}</p>
      </div>
    );
  }
}
