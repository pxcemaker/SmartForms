import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-question',
  styleUrl: 'sf-question.css',
  shadow: true,
})
export class SfQuestion {
  @Prop({ reflect: true }) value: string;

  render() {
    return (
      <div class="question">
        <p>{'' + this.value}</p>
      </div>
    );
  }
}
