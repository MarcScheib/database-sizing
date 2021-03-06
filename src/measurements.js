import {measurementTypes} from './resources/measurement-types';

export let measurementList = [
  {
    name: 'Ping',
    type: measurementTypes[0],
    values: 1,
    size: measurementTypes[0].sizePerValue,
    number: 0,
    interval: 60,
    deletable: false
  },
  {
    name: 'SNMP Interface',
    type: measurementTypes[1],
    values: 12,
    size: 12 * measurementTypes[1].sizePerValue,
    number: 0,
    interval: 300,
    deletable: false
  }
];
