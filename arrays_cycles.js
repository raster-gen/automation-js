// Arrays and Cycles Practical Task

// 1. Given an array consisting of movie names,
// iterate over the array with the output of the names of each movie to the console
let moviesArr = [
  'Avatar',
  'Avengers: Endgame',
  'Titanic',
  'Star Wars: Episode VII - The Force Awakens',
  'Avengers: Infinity War'
];

moviesArr.forEach(movie => console.log(movie));

// 2. Given an array of car manufacturers, convert the array to a string and back to an array
let carArr = ['Audi', 'BMW', 'Mercedes', 'Porsche', 'VW'];

carArr = carArr.join(', ');
carArr = carArr.split(', ');

// 3. Given an array of the names of your friends, add the words hello to each element of the array
let friendsArr = ['Ivan', 'Dima', 'Max', 'Alex'];
friendsArr = friendsArr.map(name => `${name} hello`);

// 4. Convert numeric array to Boolean
const numArr = [1, 2, 5, 0, -1];
const boolArr = numArr.map(num => Boolean(num));

// 5. Sort the array [1,6,7,8,3,4,5,6] in descending order
let arrForSort = [1, 6, 7, 8, 3, 4, 5, 6];
arrForSort.sort((a, b) => b - a);

// 6. Filter array [1,6,7,8,3,4,5,6] by value> 3
const arrForFilter = [1, 6, 7, 8, 3, 4, 5, 6];
const filteredArr = arrForFilter.filter(num => num > 3);
console.log(filteredArr);

// 7. Write a function that takes two parameters -
// an array and a number and outputs the index of an array element equal to a number
const getIndex = (arr, num) => console.log(arr.indexOf(num));

// 8. Implement a loop that will print the number 'a' until it is less than 10
for (let i = 0; i < 10; i++) {
  console.log('a');
}

// 9. Implement a loop that prints prime numbers to the console

const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const printPrimeNumbers = range => {
  for (let i = 0; i < range; i++) {
    if (isPrime(i)) console.log(i);
  }
};

// 10. Implement a loop that prints odd numbers to the console
const printOddNumbers = range => {
  for (let i = 0; i < range; i++) {
    if (i % 2 !== 0) console.log(i);
  }
};
