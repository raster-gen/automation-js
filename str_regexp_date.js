// String, RegExp, DateTime Practical Task

// Given the string 'ahb acb aeb aeeb adcb axeb'.
// Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
const strExample = 'ahb acb aeb aeeb adcb axeb';
const regexp = /a\wb/g;
console.log(strExample.match(regexp));

// Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
const strNum = '2 + 3 223 2223';
const regExp = /2\s\+\s3/;
console.log(strNum.match(regExp));

// Get the day, month and year of the current date and output it to the console separately
const currentDate = new Date();
console.log(currentDate.getDate());
console.log(currentDate.getMonth());
console.log(currentDate.getFullYear());