import { Component, h, Prop, State } from '@stencil/core';
import { Frageblatt } from './Frageblatt';
import { Umfrage } from './Umfrage';

@Component({
  tag: 'sf-survey',
  styleUrl: 'sf-survey.css',
  shadow: true,
})
export class SfSurvey {
  //umfrageInhalt: Umfrage;
  @Prop({ mutable: true }) surveyData: Umfrage;
  //surveyData: Umfrage;
  //question: [string];

  @Prop() frageblaetterMap: Frageblatt[];
  umfrage: Frageblatt[];

  /*componentWillRender() {
    this.fillMaps();
  }*/

  componentWillRender() {
    this.fillMaps();
  }

  fillMaps() {
    //this.getSurvey();
    this.surveyData?.umfrage?.map((frageblatt, i) => this.frageblaetterMap.push(new Frageblatt(i, frageblatt.frage, frageblatt.antwort, frageblatt.answertype)));
    this.showMySurvey();
  }

  showMySurvey() {
    //this.fillMaps();

    this.frageblaetterMap?.forEach((frageblatt, i) => {
      console.log(frageblatt.answertype);
      if (frageblatt.answertype == 'rtx') {
        return (
          <div>
            <sf-question value={frageblatt.frage}></sf-question> <sf-text-area></sf-text-area>
          </div>
        );
      } else if (frageblatt.answertype == 'checkbox') {
        return (
          <div>
            <sf-question value={frageblatt.frage}></sf-question>
            {frageblatt.antwort.forEach((antwort, antworti) => {
              <sf-checkbox value={antwort[antworti]}></sf-checkbox>;
            })}
          </div>
        );
      } else if (frageblatt.answertype == 'radio') {
        return (
          <div>
            <sf-question value={frageblatt.frage}></sf-question>
            {frageblatt.antwort.forEach((antwort, antworti) => {
              <sf-radio value={antwort[antworti]}></sf-radio>;
            })}
          </div>
        );
      } else if (frageblatt.answertype == 'bilder') {
        return (
          <div>
            <sf-question value={frageblatt.frage}></sf-question>
            {frageblatt.antwort.forEach((antwort, antworti) => {
              <sf-image-selection imageurl={antwort[antworti]}></sf-image-selection>;
            })}
          </div>
        );
      }
    });
    console.log(this.frageblaetterMap);
  }

  showSomething() {
    return (
      <div>
        <p>Hallo</p>
      </div>
    );
  }

  componentWillLoad() {
    this.getSurvey();
  }

  getSurvey() {
    fetch('/files/datei2.json')
      .then(response => response.json())
      .then((data: Umfrage) => (this.surveyData = data));
    console.log(this.surveyData);

    this.fillMaps();
  }

  render() {
    return (
      <div>
        <p>Testtext</p>
        <p>{console.log()}</p>
        {this.showSomething()}
        {this.showMySurvey()}
      </div>
    );
  }
}
