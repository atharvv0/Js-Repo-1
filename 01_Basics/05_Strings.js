const name = "Atharva"
const age = 18

console.log( " Hello, I'm "+ name + age );
console.log(` Hello, I'm ${name} I'm of ${age}`);

const name2 = new String('Atharva2')

console.log(name2[3]);
console.log(name.__proto__);

console.log(name2.length);
console.log(name2.toUpperCase());  //upper case
console.log(name2.toLowerCase()); // lower case Conversion

console.log(name2.replace('2','-Kshirsagar'))  // Replace Something In a String
console.log(name2.indexOf('k'))          // checking Index of A
console.log(name2.charAt(2))           // Checking Character at Index

const newStr = name2.substring(0,6)
console.log(newStr)

const str2 = name2.substring(0,7)

console.log(name2.slice(-2,4))   // slicing
console.log(str2.trim(-2,4))

console.log(str2.includes('Ayush')) // To check Is Present?
console.log(str2.split('-')) // To convert into string
