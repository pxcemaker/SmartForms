import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-question-container',
  styleUrl: 'sf-question-container.css',
  shadow: true,
})
export class SfQuestionContainer {

  @Prop() answerType: string; //
  @Prop() questionTitle: string;

  render() {
    return (
      <Host>
        <div>
          {this.questionTitle}
        </div>
      </Host>
    );
  }

}
