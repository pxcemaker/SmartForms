import { Component, Listen, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'sf-adddynform',
  styleUrl: 'sf-adddynform.css',
  shadow: true,
})
export class SfAdddynform {
  addForm: boolean;

  @Event() addDynForm: EventEmitter;

  @Listen('click', { capture: true })
  handleClick(ev) {
    this.addDynForm.emit(true);
  }

  render() {
    return (
      <div>
        <button class="btn" onSubmit={e => this.handleClick(e)}>
          +
        </button>
      </div>
    );
  }
}
