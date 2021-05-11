import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-radioempty',
  styleUrl: 'sf-radioempty.css',
})
export class SfRadioempty {
  @State() answer: string;

  @Event() radioAnswer: EventEmitter<string>;

  handleChange(event) {
    this.answer = event.target.value;
    this.radioAnswer.emit(this.answer);
  }

  render() {
    return (
      <div class="grid-item checkbox-kasten">
        <div class="checkbox-content">
          <input type="radio" id="radio-1" name="radio"></input>
          <label>
            <input type="text" id="answerinput" value={this.answer} onInput={e => this.handleChange(e)}></input>
          </label>
        </div>
      </div>
    );
  }
}
