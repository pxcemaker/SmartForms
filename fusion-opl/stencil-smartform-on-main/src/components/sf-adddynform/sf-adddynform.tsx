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
        <button class="btn"  onClick={() => this.handleClick()}>
          +
        </button>
      </div>
    );
  }
}
