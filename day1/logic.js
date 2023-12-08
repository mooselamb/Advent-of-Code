const fs = require("node:fs");
const path = require("node:path");
// import fs from "node:fs";

const contents = fs.readFileSync(path.resolve(__dirname, "info.txt"), "utf-8");

let tally = 0;

const numObj = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const numObj2 = {
  eno: "1",
  owt: "2",
  eerht: "3",
  ruof: "4",
  evif: "5",
  xis: "6",
  neves: "7",
  thgie: "8",
  enin: "9",
};

let accumulatorStr = "";

const strArray = contents.split("\r\n");

function strParser(str) {
  let firstDigit;
  let secondDigit;

  // let matches = str.match(/(\d+)/);
  // let matchStr = matches[0];
  // firstDigit = matchStr;
  for (let i = 0; i < str.length && !firstDigit; i++) {
    // iterate over each character until end of string or firstDigit is defined "as3gjkla4sd"
    if (/^\d$/.test(str[i])) {
      // is character 0-9?
      firstDigit = str[i]; // firstDigit is current character
    } else {
      // otherwise
      accumulatorStr += str[i]; // add current character to the accumulator
      for (const key in numObj) {
        if (accumulatorStr.endsWith(key)) {
          firstDigit = numObj[key];
          break;
        }
      }
    }
  }
  accumulatorStr = "";
  // console.log(firstDigit);
  // console.log(firstDigit);

  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let revStr = reverseArray.join("");
  // let matches = joinArray.match(/(\d+)/);
  // let matchStr = matches[0];
  for (let i = 0; i < revStr.length && !secondDigit; i++) {
    // iterate over each character until end of string or firstDigit is defined "as3gjkla4sd"
    if (/^\d$/.test(revStr[i])) {
      // is character 0-9?
      secondDigit = revStr[i]; // firstDigit is current character
    } else {
      // otherwise
      accumulatorStr += revStr[i]; // add current character to the accumulator
      for (const key in numObj2) {
        if (accumulatorStr.endsWith(key)) {
          secondDigit = numObj2[key];
          break;
        }
      }
    }
  }
  accumulatorStr = "";
  // secondDigit = matchStr;
  // console.log(secondDigit);

  const result = `${firstDigit}${secondDigit}`;

  //   console.log(result);
  const numResult = Number(result);

  tally += numResult;

  return tally;
}

strArray.forEach(strParser);

console.log(tally);
