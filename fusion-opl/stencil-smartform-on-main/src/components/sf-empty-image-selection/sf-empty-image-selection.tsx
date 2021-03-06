import { Component, EventEmitter, h, State, Event } from '@stencil/core';

@Component({
  tag: 'sf-empty-image-selection',
  styleUrl: 'sf-empty-image-selection.css'
})
export class SfEmptyImageSelection {
  
  @State() answer: string;

  @Event() imageAnswer: EventEmitter<string>;

  handleChange(event) {
    this.answer = event.target.value;
    this.imageAnswer.emit(this.answer);
  }

  render() {
    return (
      <div class="grid-item checkbox-kasten">
        <label class="container">
          <input type="text" id="answerinput" placeholder="Gib hier die URL zu deinem Bild ein." value={this.answer} onInput={e => this.handleChange(e)}></input>
        </label>
      </div>
    );
  }

}
