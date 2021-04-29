import { Component, State, h, Prop, Watch } from '@stencil/core';

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

  constructor() {
    this.checkboxMap = [new CheckBoxDef('antwort1', 'a'), new CheckBoxDef('antwort2', 'b'), new CheckBoxDef('antwort3', 'c')];
    this.radioMap = [new RadioDef('antwort1', 'a'), new RadioDef('antwort2', 'b'), new RadioDef('antwort3', 'c')];
  }

  @Watch('checkboxMap')
  watchHandler(newValue, oldValue) {
    console.log('The new value of activated is: ', newValue);
  }

  testLog(checkboxdef, ev) {
    console.log(checkboxdef.key + ' ' + checkboxdef.value);
  }

  returnEmptyCheckbox() {
    return this.checkboxMap.map((checkboxdef, index) => (
      <sf-emptycheckbox
        onCheckboxAnswer={ev =>
          (this.checkboxMap = [...this.checkboxMap].map(checkboxdefnew => {
            if (checkboxdef.key == checkboxdefnew.key) {
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
    return this.radioMap.map((radiodef, index) => (
      <sf-radioempty
        onRadioAnswer={ev =>
          (this.radioMap = [...this.radioMap].map(radiodefnew => {
            if (radiodef.key == radiodefnew.key) {
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

  ///{ev => (this.checkboxMap[index].value = ev.detail)}

  renderInputBox() {
    if (this.radio == 'checkbox') {
      return <div class="item-1-3 answers">{this.returnEmptyCheckbox()}</div>;
    } else if (this.radio == 'radio') {
      return <div class="item-1-3 answers">{this.returnEmptyRadio()}</div>;
    }
    return <div></div>;
  }

  returnAnswers() {
    if (this.radio == 'checkbox') {
      return this.checkboxMap.map(checkboxdef => <sf-checkbox value={checkboxdef.value}></sf-checkbox>);
    } else if (this.radio == 'radio') {
      return this.radioMap.map(radiodef => <sf-radio value={radiodef.value}></sf-radio>);
    } else if (this.radio == 'rtx') {
      return <sf-text-area></sf-text-area>;
    }
  }

  returnQuestion() {
    return <sf-question value={this.question}></sf-question>;
  }

  render() {
    return (
      <div class="grid-container">
        <div class="kasten item-1-1">
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
              </div>
            </div>

            {this.renderInputBox()}

            <button class="item-2-3-btn" type="submit">
              safe
            </button>
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
