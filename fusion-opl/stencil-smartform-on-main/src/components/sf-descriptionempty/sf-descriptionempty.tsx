import { Component, h, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'sf-descriptionempty',
  styleUrl: 'sf-descriptionempty.css',
  shadow: true,
})
export class SfDescriptionempty {

  @State() description: string;
  @Event() descriptionInput: EventEmitter<string>;

  handleChange(event) {
    this.description = event.target.value;
    this.descriptionInput.emit(this.description);
  }

  render() {
    return (
      <div>
        <label class="item-1-1">Beschreibung (optional):</label>
        <input type="text" id="fdescription" class="item-1-2" name="description" value={this.description} onInput={e => this.handleChange(e)}></input>
      </div>
    );
  }

}
