#!/usr/bin/node
const arg = process.argv[2];
if (typeof arg === 'undefinded') {
  console.log('No argument');
} else {
  console.log(arg);
}
