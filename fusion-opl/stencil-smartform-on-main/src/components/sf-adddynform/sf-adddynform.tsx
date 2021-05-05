import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'sf-adddynform',
  styleUrl: 'sf-adddynform.css',
  shadow: true,
})
export class SfAdddynform {
  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) id: string;
  @Event() isClicked: EventEmitter<void>;

  handleClick() {
    this.isClicked.emit();
  }

  render() {
    return (
      <div>
        <button class="btn" id={this.id} onClick={() => this.handleClick()}>
          {'' + this.value}
        </button>
      </div>
    );
  }
}
