function alphabet() {
  let first = "a",
    last = "z",
    result = "";
  for (let i = first.charCodeAt(); i <= last.charCodeAt(); i++) {
    let str = String.fromCharCode(i);
    result += `${str} `;
  }
  console.log(result.toUpperCase());
}
alphabet();
