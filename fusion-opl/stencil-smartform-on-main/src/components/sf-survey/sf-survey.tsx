import { Component, h, Prop } from '@stencil/core';
import { Umfrage } from './Umfrage';

@Component({
  tag: 'sf-survey',
  styleUrl: 'sf-survey.css',
  shadow: true,
})
export class SfSurvey {
  //umfrageInhalt: Umfrage;
  @Prop({ mutable: true }) surveyData;
  //surveyData: Umfrage;
  //question: [string];

  answertype: string;

  /*componentWillRender() {
    this.fillMaps();
  }*/

  componentWillRender() {
    this.fillMaps();
  }

  fillMaps() {
    /*this.surveyData.forEach(value => {
      this.umfrage = value;
    });*/
    //this.umfrage = this.surveyData[0].value;
    console.log('surveyData value[0]: ');
    console.log(this.surveyData[0].value[0]);
    console.log('surveyData value[0].answertype: ');
    console.log(this.surveyData[0].value[0].answertype);
    console.log('surveyData value[0].key: ');
    console.log(this.surveyData[0].value[0].key);
    console.log('surveyData value[0].value: ');
    console.log(this.surveyData[0].value[0].value);
    console.log('surveyData value[0].value[0]: ');
    console.log(this.surveyData[0].value[0].value[0]);
    /*for (let i = 0; i < 20; i++) {
      this.frageblaetterMap[i] = this.surveyData[0].value[i].answertype;
    }*/

    //this.getSurvey();
    //this.surveyData?.umfrage?.map((frageblatt, i) => this.frageblaetterMap.push(new Frageblatt(i, frageblatt.frage, frageblatt.antwort, frageblatt.answertype)));
    this.showMySurvey();
  }

  showMySurvey() {
    //console.log('Frageblätter: ' + this.frageblaetterMap);
    //this.fillMaps();
    /*this.frageblaetterMap?.forEach((frageblatt, i) => {
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
    });*/
    //console.log(this.frageblaetterMap);
  }

  showSomething() {
    return (
      <div>
        <p>Hallo</p>
      </div>
    );
  }

  componentWillLoad() {
    return this.getSurvey();
  }

  getSurvey() {
    return fetch('/api.php')
      .then(response => response.json())
      .then((data: Umfrage) => (this.surveyData = data))
      .then(() => console.log(this.surveyData))
      .then(() => this.fillMaps());
    //console.log(this.surveyData);
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
