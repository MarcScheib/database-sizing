import {measurements} from './measurements';

export class App {
  measurements = {};

  constructor() {
    this.measurements = measurements;
    console.log(measurements);
  }
}
