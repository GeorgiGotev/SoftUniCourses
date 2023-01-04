function alphabet() {
  let first = "a",
    last = "z",
    result = "";
  for (let i = first.charCodeAt(0); i <= last.charCodeAt(0); i++) {
    let str = String.fromCharCode(i);
    result += `${str} `;
  }
  console.log(result.toUpperCase());
}
alphabet();
