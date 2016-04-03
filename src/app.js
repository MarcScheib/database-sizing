import 'jquery';
import 'bootstrap';
import {measurements} from './measurements';
import {units} from './units';

export class App {
  units = [];
  measurements = {};
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

  constructor() {
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
      size += this.measurements[i].size * this.measurements[i].number * this.getDaysInSeconds(this.customTime) / this.measurements[i].interval;
    }
    return size / this.units[this.unitId].factor;
  }

  get customSizeAggregated() {
    let size = 0;

    return size / this.units[this.unitId].factor;
  }

  getDaysInSeconds(days) {
    return days * 24 * 60 * 60;
  }
}
