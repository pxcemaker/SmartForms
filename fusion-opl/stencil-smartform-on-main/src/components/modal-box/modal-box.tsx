import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'modal-box',
  styleUrl: 'modal-box.css',
  shadow: true,
})


export class ModalBox {

  @Prop({
    mutable:true,
    reflect:true,
  })

  @Prop() isOpen: boolean

  render() {
    return (
      <Host class={this.isOpen ? 'modalbox' : 'inaktiv'}>
        <div id="modalbox" class="inaktiv">
        <div id="modalbox-inhalt">
            <div class="loeschen">
                <button id="close">X</button>
            </div>
            <h4>Frage:</h4>
            <input type="text" id="ae-titel"/>
            <h4>Beschreibung:</h4>
            <textarea  id="ae-beschreibung"></textarea>
            <div class="anpassen">
                <button id="speichern">Speichern</button>
                
            </div>
        </div>
        </div>
      </Host>
    );
  }

}
