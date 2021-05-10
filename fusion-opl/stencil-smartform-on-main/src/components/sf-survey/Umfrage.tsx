import { Frageblatt } from './Frageblatt';

export class Umfrage {
  key: number;
  umfrage: Frageblatt[];

  constructor(key, umfrage) {
    this.key = key;
    this.umfrage = umfrage;
  }
}
