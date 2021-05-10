import { Antworten } from './Antworten';

export class Frageblatt {
  key: string;
  value: Antworten[];

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
