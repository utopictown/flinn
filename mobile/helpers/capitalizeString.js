export default function capitalizeString(text) {
  return `${text
    .split(" ")
    .map((_text) => _text.charAt(0).toUpperCase() + _text.slice(1))
    .join(" ")}`;
}
