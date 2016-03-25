export class NumberFormatValueConverter {
  toView(value) {
    return value.toLocaleString('value', {minimumFractionDigits: 0});
  }
}
