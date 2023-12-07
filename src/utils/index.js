export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .Array.from(codePoints)
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}
