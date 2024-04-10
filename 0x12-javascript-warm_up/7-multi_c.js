#!/usr/bin/node
const arg = process.argv[2];
const myNum = parseInt(arg);

if (!isNaN(myNum)) {
  for (let i = 0; i < myNum; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
