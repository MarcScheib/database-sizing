import {measurementTypes} from './measurement-types';

export let measurements = [
  {
    name: 'Ping',
    type: measurementTypes.ping,
    values: 1,
    size: 1 * measurementTypes.ping.sizePerValue,
    number: 0,
    interval: 60
  },
  {
    name: 'SNMP Interface',
    type: measurementTypes.snmp,
    values: 12,
    size: 12 * measurementTypes.snmp.sizePerValue,
    number: 0,
    interval: 300
  }
];
