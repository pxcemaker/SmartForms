import { Antworten } from './Antworten';

export class Frageblatt {
  key: number;
  frage: string;
  antwort: Antworten[];
  answertype: string;

  constructor(key, frage, antwort, answertype) {
    this.key = key;
    this.frage = frage;
    this.antwort = antwort;
    this.answertype = answertype;
  }
}
