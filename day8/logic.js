const fs = require("fs");
const path = require("path");
const data = fs.readFileSync(path.resolve(__dirname, "info.txt"), "utf-8");

const lrArray = [];
const lrRegex = /[LR]+/g;

const lrMatch = data.match(lrRegex);

const lrString = lrMatch[0];

for (let i = 0; i < lrString.length; i++) {
  lrArray.push(lrString[i]);
}

const threeRegex = /\b([A-Z]{3}) = \(([A-Z]{3}), ([A-Z]{3})\)/g;

const threeMatch = data.matchAll(threeRegex);

const leftObj = {};
const rightObj = {};

for (const match of threeMatch) {
  leftObj[match[1]] = match[2];
  rightObj[match[1]] = match[3];
}

let i = 0;
let start = ["AAA"]; // n elements (array.length) // start.length === 1, start[1] === undefined
// lrArray.length = m (where m is less than n)

while (!start.includes("ZZZ")) {
  while (i < lrArray.length && start[start.length - 1] !== "ZZZ") {
    if (lrArray[i] === "L") {
      start.push(leftObj[start[start.length - 1]]);
      i++;
    } else {
      start.push(rightObj[start[start.length - 1]]);
      i++;
    }
  }
  i = 0;
}


console.log(start.length);
