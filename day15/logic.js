const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "info.txt"), "utf-8");

const strValArr = [];
const charRegex = /[^,]+/g;
const charMatch = data.matchAll(charRegex);

for (const match of charMatch) {
  strValArr.push(match[0]);
}

let accumVal = 0;

function getCharCodes(str) {
  let currentVal = 0;

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    let numConvert = Number(code);
    currentVal += numConvert;
    let multBy17 = currentVal * 17;
    let remBy256 = multBy17 % 256;
    currentVal = remBy256;
  }
//   console.log(currentVal);
  accumVal += currentVal;
  console.log(accumVal);
  return accumVal; //30
}

strValArr.forEach(getCharCodes)
// getCharCodes("rn=1");
// getCharCodes("cm-");
// getCharCodes("qp=3");
// getCharCodes("cm=2");
// getCharCodes("qp-");
// getCharCodes("pc=4");
// getCharCodes("ot=9");
// getCharCodes("ab=5");
// getCharCodes("pc-");
// getCharCodes("pc=6");
// getCharCodes("ot=7");

console.log(accumVal);
