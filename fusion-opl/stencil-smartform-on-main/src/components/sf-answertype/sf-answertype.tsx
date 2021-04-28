import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sf-answertype',
  styleUrl: 'sf-answertype.css',
  shadow: true,
})
export class SfAnswertype {
  @State() formControls = {
    username: null,
    password: null,
  };

  changeFormValue(controlName, value) {
    this.formControls = {
      ...this.formControls,
      [controlName]: value,
    };
  }

  handleSubmit(e) {
    4;
    e.preventDefault();
    console.log(this.formControls);
  }

  render() {
    return (
      <div>
        <input type="${type}"></input>
      </div>
    );
  }
}
