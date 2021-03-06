import { Component, State, h, Watch, Prop } from '@stencil/core';
import { CheckBoxDef } from './CheckBoxDef';
import { ImageDef } from './ImageDef';
import { RadioDef } from './RadioDef';

@Component({
  tag: 'sf-dynamicform',
  styleUrl: 'sf-dynamicform.css',
  shadow: true,
})
export class SfDynamicform {
  @Prop({ mutable: true }) question: string = 'Deine Frage';
  @Prop({ mutable: true }) description: string = '...';
  @Prop({ mutable: true }) radio: string;
  @State() checkboxMap: CheckBoxDef[];
  @State() radioMap: RadioDef[];
  @State() imageMap: ImageDef[];
  @Prop({ mutable: true }) radioIdNmbr: number = 0;
  @Prop({ mutable: true }) result: CheckBoxDef[] | RadioDef[] | string | ImageDef[];
  @Prop({ mutable: true, reflect: true }) isOpen: boolean; //visible or not

  constructor() {
    this.checkboxMap = [new CheckBoxDef('antwort1', 'Add Answer'), new CheckBoxDef('antwort2', 'Add Answer')];
    this.radioMap = [new RadioDef('antwort1', 'Add Answer'), new RadioDef('antwort2', 'Add Answer')];
    this.imageMap = [new ImageDef('antwort1', 'assets/img/ipadinhand.png'), new ImageDef('antwort2', 'assets/img/ipadinhand.png')];
  }

  @Watch('radioIdNmbr')
  @Watch('checkboxMap')
  watchHandler(newValue /* oldValue */) {
    console.log('The new value of activated is: ', newValue);
  }

  testLog(checkboxdef /* ev */) {
    console.log(checkboxdef.key + ' ' + checkboxdef.value);
  }

  returnEmptyCheckbox() {
    return this.checkboxMap.map((_checkboxdef, index) => (
      <sf-emptycheckbox
        onCheckboxAnswer={ev =>
          (this.checkboxMap = [...this.checkboxMap].map((checkboxdefnew, indexnew) => {
            if (index == indexnew) {
              checkboxdefnew.value = ev.detail;
              return checkboxdefnew;
            } else {
              return checkboxdefnew;
            }
          }))
        }
      ></sf-emptycheckbox>
    ));
  }

  returnEmptyRadio() {
    return this.radioMap.map((_radiodef, index) => (
      <sf-radioempty
        onRadioAnswer={ev =>
          (this.radioMap = [...this.radioMap].map((radiodefnew, indexnew) => {
            if (index == indexnew) {
              radiodefnew.value = ev.detail;
              return radiodefnew;
            } else {
              return radiodefnew;
            }
          }))
        }
      ></sf-radioempty>
    ));
  }

  returnEmptyImage() {
    return this.imageMap.map((_imagedef, index) => (
      <sf-empty-image-selection
        onImageAnswer={ev =>
          (this.imageMap = [...this.imageMap].map((imagedefnew, indexnew) => {
            if (index == indexnew) {
              imagedefnew.value = ev.detail;
              return imagedefnew;
            } else {
              return imagedefnew;
            }
          }))
        }
      ></sf-empty-image-selection>
    ));
  }

  ///{ev => (this.checkboxMap[index].value = ev.detail)}

  renderInputBox() {
    if (this.radio == 'checkbox') {
      return (
        <div class="item-1-4 answers">
          {this.returnEmptyCheckbox()} <sf-adddynform value="+" id="addBtn" onIsClicked={() => this.addAns()}></sf-adddynform>
        </div>
      );
    } else if (this.radio == 'radio') {
      return (
        <div class="item-1-4 answers">
          {this.returnEmptyRadio()} <sf-adddynform value="+" id="addBtn" onIsClicked={() => this.addAns()}></sf-adddynform>
        </div>
      );
    } else if (this.radio == 'bilder') {
      return (
        <div class="item-1-4 answers">
          {this.returnEmptyImage()} <sf-adddynform value="+" id="addBtn" onIsClicked={() => this.addAns()}></sf-adddynform>
        </div>
      );
    }
    return <div></div>;
  }
  addAns() {
    if (this.radio == 'checkbox') {
      return (this.checkboxMap = [...this.checkboxMap, new CheckBoxDef('Blubb', 'Add Answer')]);
    } else if (this.radio == 'radio') {
      return (this.radioMap = [...this.radioMap, new RadioDef('Blubb', 'Add Answer')]);
    } else if (this.radio == 'bilder') {
      return (this.imageMap = [...this.imageMap, new ImageDef('Blubb', 'assets/img/ipadinhand.png')]);
    }
  }

  returnAnswers() {
    if (this.radio == 'checkbox') {
      this.result = this.checkboxMap;
      return this.checkboxMap.map(checkboxdef => <sf-checkbox value={checkboxdef.value}></sf-checkbox>);
    } else if (this.radio == 'radio') {
      this.result = this.radioMap;
      this.radioIdNmbr + 1;
      return (
        <div class="radio-kasten">
          {this.radioMap.map(radiodef => (
            <sf-radio radio-Id={this.radioIdNmbr} value={radiodef.value} radio-Name={'radio'} radioGroup="group"></sf-radio>
          ))}
        </div>
      );
    } else if (this.radio == 'rtx') {
      this.result = '';
      return <sf-text-area></sf-text-area>;
    } else if (this.radio == 'bilder') {
      this.result = this.imageMap;
      return this.imageMap.map(imagedef => <sf-image-selection imageurl={imagedef.value}></sf-image-selection>);
    }
  }

  returnQuestion() {
    return <sf-question value={this.question}></sf-question>;
  }

  returnDescription() {
    return <sf-description dvalue={this.description}></sf-description>;
  }

  verschwinde(ev: MouseEvent) {
    console.log(ev);
    this.isOpen = true;
  }

  render() {
    return (
      <div class="grid-container primary-container">
        <div class="item-1-1 preview-container">
          {/*Gitb Frage eingeben aus, wenn nichts drin steht */}
          {this.returnQuestion()}
          <br></br>
          {this.returnDescription()}

          {this.returnAnswers()}
        </div>
        <div class={this.isOpen ? 'hidden' : 'visible'}>
          <div class="kasten item-2-1">
            <form class="grid-container" novalidate>
              <div class="item-1-1">
                <h2>Frage erstellen</h2>
                <div class="tooltip">
                  <div class="infocircle">
                    <p>i</p>
                  </div>
                  <span class="tooltiptext">
                    W??hlen Sie die Art der Frage aus und schreiben Sie Antworten und Fragen in die Felder.
                    <br></br>Sie k??nnen optional auch einen kurzen Beschreibungstext hinzuf??gen.
                  </span>
                </div>
              </div>

              <div class="item-1-2">
                <sf-questionempty onQuestionInput={ev => (this.question = ev.detail)}></sf-questionempty>
              </div>
              <div class="item-1-3">
                <sf-descriptionempty onDescriptionInput={ev => (this.description = ev.detail)}></sf-descriptionempty>
              </div>

              <div class="item-2-2to3 grid-container" id="grid">
                <label class="item-1-1">Antworttyp:</label>
                <div class="item-1-2">
                  <div class="answertypeoptions">
                    <input
                      id="fanswertype rtx"
                      name="answertype"
                      type="radio"
                      onInput={() => {
                        this.radio = 'rtx';
                      }}
                      value="rtx"
                    ></input>
                    <label class="choosetype">Text-Antwort</label>
                  </div>

                  <div class="answertypeoptions">
                    <input
                      id="fanswertype checkbox"
                      name="answertype"
                      type="radio"
                      value="checkbox"
                      onInput={() => {
                        this.radio = 'checkbox';
                      }}
                    ></input>
                    <label class="choosetype">Multiple-Choice</label>
                  </div>

                  <div class="answertypeoptions">
                    <input
                      id="fanswertype radio"
                      name="answertype"
                      onInput={() => {
                        this.radio = 'radio';
                      }}
                      type="radio"
                      value="radio"
                    ></input>
                    <label class="choosetype">Radio-Buttons</label>
                  </div>

                  <div class="answertypeoptions">
                    <input
                      id="fanswertype bilder"
                      name="answertype"
                      type="radio"
                      value="bilder"
                      onInput={() => {
                        this.radio = 'bilder';
                      }}
                    ></input>
                    <label class="choosetype">Bilder</label>
                  </div>
                </div>
              </div>

              {this.renderInputBox()}
              <div class="item-1-5 saveBtnDiv">
                <a class="btn btn-common" onClick={ev => this.verschwinde(ev)}>
                  Speichern
                </a>
                <div class="tooltip">
                  <div class="infocircle">
                    <p>i</p>
                  </div>
                  <span class="tooltiptext">Speichern Sie Ihre fertige Frage hier, damit sie sp??ter in der Umfrage gespeichert werden kann.</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
