function charactersInRange(char1, char2) {
  let startPosition = Math.min(
    Number(char1.charCodeAt()),
    Number(char2.charCodeAt())
  );
  let endPosition = Math.max(
    Number(char1.charCodeAt()),
    Number(char2.charCodeAt())
  );
  let result = "";
  for (let i = startPosition + 1; i < endPosition; i++) {
    let currCharr = String.fromCharCode(i);
    result += `${currCharr} `;
  }
  console.log(result);
}
charactersInRange("#", ":");
