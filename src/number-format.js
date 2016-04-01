export class NumberFormatValueConverter {
  toView(value) {
    let valueString = value.toLocaleString('value', {minimumFractionDigits: 0});

    if (value > 0 && valueString === '0') {
      return '> 0';
    }

    return valueString;
  }
}
