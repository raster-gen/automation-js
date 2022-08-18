/**
Conditional statements and Data types Practical task  
*/

// entry data
const strValue = "string value";
const boolValue = true;
const numValue = 10;

// 1. Perform addition of various types (string + boolean, string + number, number + boolean)
console.log("string + boolean:", strValue + boolValue);
console.log("string + number:", strValue + numValue);
console.log("number + boolean:", numValue + boolValue);

// 2. Perform multiplication of various types (string * boolean, string * number, number * boolean)
console.log("string * boolean:", strValue * boolValue);
console.log("string * number:", strValue * numValue);
console.log("number * boolean:", numValue * boolValue);

// 3. Divide different types (string / boolean, string / number, number / boolean)
console.log("string / boolean:", strValue / boolValue);
console.log("string / number:", strValue / numValue);
console.log("number / boolean:", numValue / boolValue);

// 4. Perform explicit conversion (number, string, boolean)
console.log("string to boolean:", Boolean(strValue));
console.log("string to number:", Number(strValue));
console.log("number to boolean:", Boolean(numValue));
console.log("boolean to string:", String(boolValue));
