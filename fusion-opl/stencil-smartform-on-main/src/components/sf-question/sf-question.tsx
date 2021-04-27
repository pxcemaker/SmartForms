import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sf-question',
  styleUrl: 'sf-question.css',
  shadow: true,
})
export class SfQuestion {
  render() {
    return (
      <div class="question">
        <p>Frage 0: Ist das eine Beispielfrage?</p>
      </div>
    );
  }
}
