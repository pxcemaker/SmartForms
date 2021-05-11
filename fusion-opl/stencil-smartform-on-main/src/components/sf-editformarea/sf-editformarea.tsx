import { Component, h, Method, State, Element,Prop } from '@stencil/core';

@Component({
  tag: 'sf-editformarea',
  styleUrl: 'sf-editformarea.css',
  shadow: true,
})
export class SfEditformarea {
  @Prop({mutable:true, reflect:true}) isOpen:boolean = false; //visible or not
  @Prop({ mutable: true }) ftitle: string = 'Deine Umfrage';
  @State() dynFormMap: any[];
  @Element() el: HTMLElement;
  @Method()
  async getFormElement() {
    const questions = [];
    this.el.shadowRoot.querySelectorAll('sf-dynamicform').forEach(el => questions.push({ key: el.question, answetype: el.radio, value: el.result }));

    fetch('api.php', {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify(questions),
    }) /*.then(() => {
      window.location.href = '/abschlussseite-speichern.php';
    })*/;
  }

  constructor() {
    this.dynFormMap = [<sf-dynamicform ></sf-dynamicform>];
  }

  addDyn() {
    console.log('jshgksdh');
    this.dynFormMap = [...this.dynFormMap, 'blubb'];
    console.log(JSON.stringify(this.dynFormMap));
   
  }

  returnTitle() {
    return <sf-title tvalue={this.ftitle}></sf-title>;
  }

  /*safeSurvey() {
    console.log('DynFormMap: ' + this.dynFormMap);
    const umfrage = JSON.stringify(this.dynFormMap.map);
    console.log('umfrage Json: ' + umfrage);
    /*return fetch(phpFile).then(response => response.json).then()*/
  /*}*/
  verschwinde(ev:MouseEvent){
    console.log(ev)
    this.isOpen = true;
    console.log("aasdad")

  }
  runterladen(ev:MouseEvent){
    console.log(ev)
    window.print()

  }
  render() {
    return (
      <div>
        <div class="title-container">
          <div class="title-output">
            {this.returnTitle()}
          </div>
          <div class={this.isOpen ? 'hidden' : 'visible'}>
            <div class="title-input">
              <h2>Frage erstellen</h2>
                    <div class="tooltip">
                      <div class="infocircle">
                        <p>i</p>
                      </div>
                      <span class="tooltiptext">
                        Geben Sie hier den Titel Ihrer Umfrage ein.
                      </span>
                    </div>
              <sf-title-empty onTitleInput={ev => (this.ftitle = ev.detail)}></sf-title-empty>
              <a href="#" class="btn btn-save" onClick={ev => this.verschwinde(ev)}>
                    Speichern
                  </a>
                  <div class="tooltip">
                    <div class="infocircle">
                      <p>i</p>
                    </div>
                    <span class="tooltiptext">Speichern Sie Ihren Titel hier, damit er später in der Umfrage gespeichert werden kann.</span>
                  </div>
            </div>
          </div>
        </div>
        {this.dynFormMap.map(() => {
          return <sf-dynamicform ></sf-dynamicform>;
        })}
        <div class={this.isOpen ? "hidden" : "visible"}>
        <sf-adddynform  value="+" id="addBtn" onIsClicked={() => this.addDyn()}></sf-adddynform>
        <a class="btn btn-common"  onClick={(ev)=>this.verschwinde(ev)}>
          Umfrage speichern
        </a>
        </div>
        <div class={this.isOpen ? "visible" : "hidden"}>
        <a id="send"class="btn btn-common"  onClick={(ev)=>this.runterladen(ev)}>
          Senden 
        </a>
        </div>
       
      </div>
    );
  }
}
