import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-question-container',
  styleUrl: 'sf-question-container.css',
  shadow: true,
})
export class SfQuestionContainer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
