import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-emptycheckbox',
  styleUrl: 'sf-emptycheckbox.css',
  shadow: true,
})
export class SfEmptycheckbox {
  @State() answer: string;

  @Event() checkboxAnswer: EventEmitter<string>;

  handleChange(event) {
    this.answer = event.target.value;
    this.checkboxAnswer.emit(this.answer);
  }

  render() {
    return (
      <div class="grid-item checkbox-kasten">
        <label class="container">
          <input type="text" id="answerinput" value={this.answer} onInput={e => this.handleChange(e)}></input>
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}
