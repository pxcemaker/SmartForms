import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sf-question-container',
  styleUrl: 'sf-question-container.css',
  shadow: true,
})
export class SfQuestionContainer {
  
  @Prop() fragenId: string;
  @Prop() frageText: string;
  @Prop() onOff: string;

  render() {
    return (
      <Host>
        <div class="fragen-container">
            <div class="fragen-kasten">
            <p>Frage {this.fragenId}: {this.frageText}</p>
                <div class="fragen-content">
                    <slot></slot>
                </div>
            </div>
         </div>
      </Host>
    );
  }

}
