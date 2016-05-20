import 'jquery';
import 'bootstrap';

import {inject} from 'aurelia-framework';

import {getDaysInSeconds} from './util/calculation-util';
import {measurements} from './measurements';
import {units} from './util/units';

@inject(measurements)
export class App {
  units = [];
  measurements = [];
  day = 86400; // seconds
  week = 604800; // seconds
  year = 31536000; // seconds
  customTime = 0; // days

  // data aggregation settings
  unitId = 2;
  dataAggregation = false;
  stage1age = 14; // days
  stage1interval = 1; // hours
  stage2age = 60; // days
  stage2interval = 8; // hours
  stage3age = 180; // days
  stage3interval = 24; // hours

  constructor(measurements) {
    this.units = units;
    this.measurements = measurements;
  }

  get sizePerDay() {
    let size = 0;
    for (let i = 0; i < this.measurements.length; i++) {
      size += this.measurements[i].size * this.measurements[i].number * this.day / this.measurements[i].interval;
    }
    return size / this.units[this.unitId].factor;
  }

  get sizePerWeek() {
    let size = 0;
    for (let i = 0; i < this.measurements.length; i++) {
      size += this.measurements[i].size * this.measurements[i].number * this.week / this.measurements[i].interval;
    }
    return size / this.units[this.unitId].factor;
  }

  get sizePerYear() {
    let size = 0;
    for (let i = 0; i < this.measurements.length; i++) {
      size += this.measurements[i].size * this.measurements[i].number * this.year / this.measurements[i].interval;
    }
    return size / this.units[this.unitId].factor;
  }

  get customSizeNonAggregated() {
    let size = 0;
    for (let i = 0; i < this.measurements.length; i++) {
      size += this.measurements[i].size * this.measurements[i].number * getDaysInSeconds(this.customTime) / this.measurements[i].interval;
    }
    return size / this.units[this.unitId].factor;
  }

  get customSizeAggregated() {
    if (this.dataAggregation === false) {
      return 0;
    }

    let size = 0;
    for (let j = 0; j < this.customTime; j++) {
      for (let i = 0; i < this.measurements.length; i++) {
        if (j < this.stage1age) {
          size += this.measurements[i].size * this.measurements[i].number * this.day / this.measurements[i].interval;
        } else if (j >= this.stage1age && j < this.stage2age) {
          size += this.measurements[i].size * this.measurements[i].number * this.day / (this.stage1interval * 3600);
        } else if (j >= this.stage2age && j < this.stage3age) {
          size += this.measurements[i].size * this.measurements[i].number * this.day / (this.stage2interval * 3600);
        } else {
          size += this.measurements[i].size * this.measurements[i].number * this.day / (this.stage3interval * 3600);
        }
      }
    }

    return size / this.units[this.unitId].factor;
  }

  deleteMeasurement(index) {
    if (index >= 0 && index < this.measurements.length) {
      let measurement = this.measurements[index];

      if (measurement.deletable) {
        this.measurements.splice(index, 1);
      }
    }
  }
}
