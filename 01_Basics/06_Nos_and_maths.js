const score = 333
console.log(score);

const Amount = new Number(200)
console.log(Amount);

console.log(Amount.toString().length);  // to calculate the no. of characters.
console.log(Amount.toFixed(1));          // fixed

const anyNumber = 33.489
console.log(anyNumber.toPrecision(4));

const fiveZeros = 100000
console.log(fiveZeros.toLocaleString('en-IN'));

// Maths In JavaScript
/*
console.log(Math);
console.log(Math.abs(-3));   /// Positive to Negative Conversion
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // round Off lowest
console.log(Math.floor(4.2)); // round off to highest
console.log(Math.min(4,7,6,5,9)); //minimum of the Numbers
console.log(Math.max(4,2)); // Maximum of teh Numbers
*/

console.log(Math.random());  // Alwas Value Between 0 to 1
console.log((Math.random()*10) + 1);  // To Shift and to get Values More Than 1.

const min = 100
const max = 999

console.log(Math.floor(Math.random()* (max - min +1 ) + min))