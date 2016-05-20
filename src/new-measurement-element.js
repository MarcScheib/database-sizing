import {bindable, customElement} from 'aurelia-framework';

import {measurementTypes} from './resources/measurement-types';

@customElement('new-measurement')
export class NewMeasurement {
  @bindable measurements;

  measurementTypes;

  name = '';
  values = 1;
  type = undefined;

  constructor() {
    this.measurementTypes = measurementTypes;
  }

  addMeasurement() {
    if (this.name !== '' && this.type !== 'Select a type...') {
      let measurement = {
        name: this.name,
        type: this.type,
        values: this.values,
        size: this.values * this.type.sizePerValue,
        number: 0,
        interval: this.type.defaultInterval,
        deletable: true
      };

      this.measurements.push(measurement);
      this.name = '';
      this.type = undefined;
      this.values = 1;
    }
  }
}
