import { Component, State, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-questionempty',
  styleUrl: 'sf-questionempty.css',
  shadow: true,
})
export class SfQuestionempty {
  @State() question: string;
  @Event() questionInput: EventEmitter<string>;

  handleChange(event) {
    this.question = event.target.value;
    this.questionInput.emit(this.question);
  }

  render() {
    return (
      <div>
        <label class="item-1-1">Frage:</label>
        <input type="text" id="fquestion" class="item-1-2" name="question" value={this.question} onInput={e => this.handleChange(e)}></input>
      </div>
    );
  }
}
