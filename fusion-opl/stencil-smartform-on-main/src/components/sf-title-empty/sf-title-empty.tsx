import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-title-empty',
  styleUrl: 'sf-title-empty.css',
  shadow: true,
})
export class SfTitleEmpty {

  @State() title: string;
  @Event() titleInput: EventEmitter<string>;

  handleChange(event) {
    this.title = event.target.value;
    this.titleInput.emit(this.title);
  }

  render() {
    return (
      <div>
        <input type="text" id="ftitle" class="item-1-2" name="title" value={this.title} onInput={e => this.handleChange(e)}></input>
      </div>
    );
  }

}
