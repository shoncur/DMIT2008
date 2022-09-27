import { getFoodThoughtKeys, getFoodThoughtValues } from "./food.js";

// console.log(getFoodThoughtKeys())
// console.log(getFoodThoughtValues())


// Arrow Functions & Default Parameters ES6:
const greet = (name="dan", profession="instructor") => {
    return `Howdy ${name}, are you a(n) ${profession}`
}
// can also be written like:
// const greet = (name="dan", profession="instructor") => `Howdy ${name}, are you a(n) ${profession}`;

console.log(greet());
console.log(greet("steve", "basketball player"));


// Destructuring:
let myCat = {
    name: 'Marshmallow',
    color: 'White',
    age: 1,
    isMale: true
};

let {name, color} = myCat

console.log(name)
console.log(color)

const describeCat = ({name, color, age}) => {
    return `${name} is a ${color} cat and is ${age} year(s) old`;
}
console.log(describeCat(myCat));
console.log(describeCat({color: "Beige", age: 6, name: "Gambit"}))


// The Spread Operator:
// EX 1:
let someFruits = ["apple", "oranges", "bananas"];
let someVeggies = ["potato", "carrots"]
let food = ["rice", ...someFruits, ...someVeggies];
console.log(food);

// EX 2:
let catDetails = { sound: "meow", legs: "4" };
let cat = {
    name: "Ghost",
    age: "5",
    ...catDetails
};
console.log(cat);

// Spread Operator in Functions
let catFuncParams = ["Gambit", "prrr"];

const pet = (name="Marshmallow", sound="meow") => {
    console.log(`${name} looks and says ${sound}`)
}

pet();
pet(...catFuncParams);