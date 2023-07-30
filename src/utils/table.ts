export function highlightPattern(text: string) {
  text = highlightNull(text);
  text = highlightJSON(text);
  return highlightAddress(text)
}

function highlightNull(text: string) {
  return text.replace("null", `<strong>null</strong>`);
}

function highlightAddress(text: string) {
  const matches = text.match(/(0x\w+)/g);
  if (!matches) return text;
  for (let match of matches) {
    text = text.replace(match, `<div class="addr">${match}</div>`)
  }
  return text;
}

function highlightJSON(text: string) {
  const matches = text.match(/({.*})/g);
  if (!matches) return text;
  for (let match of matches) {
    text = text.replace(match, `<div class="json">${match}</div>`);
  }
  return text;
}
