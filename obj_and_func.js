/**
 Objects and functions practical task
 */

// Create a car object, add a color property to it with the value equals 'black'
const car = {
  color: 'black',
};

// - Change the color property of the car object to 'green'
car.color = 'green';

// - Add the power property to the car object, which is a function and displays the engine power to the console
car.enginePower = 150;
car.power = function () {
  console.log('The engine power is', this.enginePower);
};

// - Pears and apples are accepted to the warehouse,
// write a function that returns the result of adding the number of accepted pears and apples
const warehouse = (apples, pears) => apples + pears;

// - Your name is saved in the payment terminal,
// write a function to define the name in the terminal
// (if you entered your name, then hello + name, if not, then there is no such name)
const USER_NAME = 'gennady';
const defineUserName = (userName) => {
  if (userName.toLowerCase() === USER_NAME) {
    console.log(`hello ${USER_NAME}`);
  } else {
    console.log('there is no such name');
  }
};

// - Write a function for calculating the type of argument and type output to the console
const calcOfType = arg => console.log(typeof arg);

// - Write a function that determines whether a number is prime or not
const isPrime = num => {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};
