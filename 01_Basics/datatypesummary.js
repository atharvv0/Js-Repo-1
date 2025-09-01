// Primitive 

// 7 types = Number,String,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scorevalue = 100.5

const isLoggedIn = false
const outsidetemp =  null
let userEmail;

// use of Symbol()

const id = Symbol('369')
const id2 = Symbol('369')

console.log(id === id2)

// Use Of Bigint

const BigNumber = 35131384684n


// Reference (Non-Primitive)
// Array, Objects, functions

const metals = ["Iron","Copper","Gold"]     // Array

let myObj = {                        // Objects
    name : "Atharva",
    age : 18
}

const myfunction = function() { // function is stored in a variable   // define a function by function(){}
    console.log("hello World")
}
console.log(typeof outsidetemp)


// -----------------------------------------------------------------------------------
// Memory Allocationin JavaScript
//Stack(Primitive) // Heap(Non-Primitive)

let nameA = "Atharva"

let anotherName = nameA
anotherName = "Hello"

console.log(nameA)
console.log(anotherName)

let userOne = {
    email : "nbc@gmail.com",
    upi : 'ac@ikl'
}

let usertwo = userOne;

usertwo.email = "Acb@gmail.com"

console.log(usertwo)
