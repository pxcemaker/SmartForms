import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'sf-dynamicform',
  styleUrl: 'sf-dynamicform.css',
  shadow: true,
})
export class SfDynamicform {
  @State() dynformControls = {
    question: null,
    answertype: null,
  };

  changeFormValue(controlName, value) {
    this.dynformControls = {
      ...this.dynformControls,
      [controlName]: value,
    };
  }

  handleSubmit(e) {
    4;
    e.preventDefault();
    console.log(this.dynformControls);
  }

  render() {
    return (
      <div class="kasten">
        <form class="grid-container" onSubmit={e => this.handleSubmit(e)} novalidate>
          <div class="item1 grid-container">
            <label class="item1">Frage:</label>
            <input
              type="text"
              id="fquestion"
              class="item2"
              name="question"
              value={this.dynformControls.question}
              onInput={(ev: any) => this.changeFormValue('question', ev.target.value)}
            ></input>
          </div>

          <div class="item-2-1 grid-container">
            <label class="item-1-1">Antworttyp:</label>
            <div class="item-1-2">
              <div class="answertypeoptions">
                <input
                  id="fanswertype"
                  name="answertype"
                  type="radio"
                  value={this.dynformControls.answertype}
                  onInput={(ev: any) => this.changeFormValue('answertype', ev.target.value)}
                ></input>
                <label>Text-Antwort</label>
              </div>
              <div class="answertypeoptions">
                <input
                  id="fanswertype"
                  name="answertype"
                  type="radio"
                  value={this.dynformControls.answertype}
                  onInput={(ev: any) => this.changeFormValue('answertype', ev.target.value)}
                ></input>
                <label>Multiple-Choice</label>
              </div>
              <div class="answertypeoptions">
                <input
                  id="fanswertype"
                  name="answertype"
                  type="radio"
                  value={this.dynformControls.answertype}
                  onInput={(ev: any) => this.changeFormValue('answertype', ev.target.value)}
                ></input>
                <label>Radio-Buttons</label>
              </div>
            </div>
          </div>
          <div class="item-1-2 answers">
            <sf-checkbox></sf-checkbox>
            <sf-checkbox></sf-checkbox>
            <sf-checkbox></sf-checkbox>
            <sf-checkbox></sf-checkbox>
          </div>
          <button class="item-2-2-btn" type="submit">
            safe
          </button>
        </form>
      </div>
    );
  }
}
