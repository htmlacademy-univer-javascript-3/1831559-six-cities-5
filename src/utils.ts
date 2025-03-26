export function capitalize(text: string = '') {
  return text ? text[0].toUpperCase() + text.substring(1) : '';
}
