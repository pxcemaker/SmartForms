import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-adddynform',
  styleUrl: 'sf-adddynform.css',
  shadow: true,
})
export class SfAdddynform {
  @Event() isClicked: EventEmitter<void>;

  handleClick() {
    this.isClicked.emit();
  }

  render() {
    return (
      <div>
        <input type="button" onClick={() => this.handleClick()}>
          Add Form
        </input>
      </div>
    );
  }
}
