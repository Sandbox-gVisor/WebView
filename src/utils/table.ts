export function highlightPattern(text: string) {
  text = text.replace("null", `<strong>null</strong>`);
  return text;
}
