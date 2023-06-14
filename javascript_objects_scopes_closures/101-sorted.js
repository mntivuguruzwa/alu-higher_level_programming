#!/usr/bin/node
// function that returns the number of occurences in a list

const dictInput = require('./101-data').dict;
const outDict = {};

for (const key in dictInput) {
  const ocurr = dictInput[key];
  outDict[ocurr] = [];
  for (const keys in dictInput) {
    if (dictInput[keys] === ocurr) {
      outDict[ocurr].push(keys);
    }
  }
}
console.log(outDict);
