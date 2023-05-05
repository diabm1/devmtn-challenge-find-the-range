// Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

// For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.

// Starting array

// Write your solution below:
//   array.sort(function (a, b) {
//     return a - b;
//   })

// console.log(array.shift()) //.shift() removes first element of array then returns it
// console.log(array.pop()) // removes last element of array

let array = [28, 43, -12, 30, 4, 0, -36];

let s = array[0];
let b = array[0];
for (let i = 1; i < array.length; i++) {
  s = Math.min(s, array[i]);
  b = Math.max(b, array[i]);
}

console.log(s);
console.log(b);

// let numbers = [1, 4, 65, -8, 11, 2, 37, -4];
let numbers = [28, 43, -12, 30, 4, 0, -36];

max = 0;
min = 0;

for (let i = 0; i < numbers.length; i++) {
  //let val equal value of index of array
  let val = numbers[i];
  //if val is bigger that max
  if (val > max) {
    //let max equal val which equals the value of the index of the array
    max = val;
  }
}
for (let i = 0; i < numbers.length; i++) {
  let val = numbers[i];
  if (val < min) {
    min = val;
  }
}

console.log(`The min value is ${min}`);
console.log(`The max value is ${max}`);
