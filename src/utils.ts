export function capitalize(text: string = '') {
  const result = text ? text[0].toUpperCase() + text.substring(1) : '';

  return result;
}
