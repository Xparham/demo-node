import { person } from "./archive.js";

const { location:{city, state}, name:{fName, lName}, orgs:{first, second}, edu:{high, uni, concen }} = person;

console.log( `I am ${lName} ${fName}`)
console.log(`-------------------`)
console.log(`from ${city}, ${state}`)
console.log(`---------`)
console.log(`I am currently in the ${first} with the ${second} `)
console.log(`---------`)
console.log(`My education history includes a HSD at ${high}, and working towards a BFA at ${uni} with a concentration in ${concen}`)