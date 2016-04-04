import {measurementTypes} from './measurement-types';

export let measurements = [
  {
    name: 'Ping',
    type: measurementTypes[0],
    values: 1,
    size: measurementTypes[0].sizePerValue,
    number: 0,
    interval: 60
  },
  {
    name: 'SNMP Interface',
    type: measurementTypes[1],
    values: 12,
    size: 12 * measurementTypes[1].sizePerValue,
    number: 0,
    interval: 300
  }
];
