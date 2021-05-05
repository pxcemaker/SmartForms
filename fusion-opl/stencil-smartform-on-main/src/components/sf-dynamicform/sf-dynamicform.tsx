import { Component, State, h, Watch, Prop } from '@stencil/core';

@Component({
  tag: 'sf-dynamicform',
  styleUrl: 'sf-dynamicform.css',
  shadow: true,
})
export class SfDynamicform {
  @State() question: string;
  @State() radio: string;
  @State() checkboxMap: CheckBoxDef[];
  @State() radioMap: RadioDef[];
  @State() imageMap: ImageDef[];
  @Prop({ mutable: true }) radioIdNmbr: number = 0;

  constructor() {
    this.checkboxMap = [new CheckBoxDef('antwort1', 'Add Answer'), new CheckBoxDef('antwort2', 'Add Answer')];
    this.radioMap = [new RadioDef('antwort1', 'Add Answer'), new RadioDef('antwort2', 'Add Answer')];
    this.imageMap = [new ImageDef('antwort1', 'Add Answer'), new ImageDef('antwort2', 'Add Answer')];
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
        <div class="item-1-3 answers">
          {this.returnEmptyCheckbox()} <sf-adddynform onIsClicked={() => this.addAns()}></sf-adddynform>
        </div>
      );
    } else if (this.radio == 'radio') {
      return (
        <div class="item-1-3 answers">
          {this.returnEmptyRadio()} <sf-adddynform onIsClicked={() => this.addAns()}></sf-adddynform>
        </div>
      );
    } else if (this.radio == 'bilder') {
    return (
      <div class="item-1-3 answers">
        {this.returnEmptyImage()} <sf-adddynform onIsClicked={() => this.addAns()}></sf-adddynform>
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
      return (this.imageMap = [...this.imageMap, new ImageDef('Blubb', 'Add Answer')]);
    }
  }

  returnAnswers() {
    if (this.radio == 'checkbox') {
      return this.checkboxMap.map(checkboxdef => <sf-checkbox value={checkboxdef.value}></sf-checkbox>);
    } else if (this.radio == 'radio') {
      this.radioIdNmbr + 1;
      return this.radioMap.map(radiodef => <sf-radio value={radiodef.value} radio-Id={this.radioIdNmbr} radio-Name={'radio'}></sf-radio>);
    } else if (this.radio == 'rtx') {
      return <sf-text-area></sf-text-area>;
    } else if (this.radio == 'bilder') {
      return this.imageMap.map(imagedef => <sf-image-selection imageurl={imagedef.value}></sf-image-selection>);
    }
  }

  returnQuestion() {
    return <sf-question value={this.question}></sf-question>;
  }

  render() {
    return (
      <div class="grid-container">
        <div class="item-1-1">
          {this.returnQuestion()}

          {this.returnAnswers()}
        </div>

        <div class="kasten item-2-1">
          <form class="grid-container" novalidate>
            <div class="item-1-1">
              <h3>Frage erstellen</h3>
              <p>Wählen Sie die Art der Frage aus und schreiben Sie Antworten und Fragen in die Felder.</p>
            </div>

            <div class="item-1-2 grid-container">
              <sf-questionempty onQuestionInput={ev => (this.question = ev.detail)}></sf-questionempty>
            </div>

            <div class="item-2-2 grid-container">
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
          </form>
        </div>
      </div>
    );
  }
}

class CheckBoxDef {
  key: string;
  value: string;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class RadioDef {
  key: string;
  value: string;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class ImageDef {
  key: string;
  value: string;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
