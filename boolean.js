/*  Boolean operators are true or false values
    We can declare a value of true or false, or get the result using the next operators
    === - equality operator
    !== - not equal operator
    < - less than operator
    > - greater thar operator
    <= - less than or equal to operator
    >= - greater than or equal to operator
*/

let temperature = 31;
let isFreezing = temperature <= 32;
console.log(isFreezing);

/* CHALLENGE: Calculate if its a child or a senior to see if its elegible to a discount */

let age = 75;
let isChild = age <= 7;
let isSenior = age >= 65;

if(isChild){
    console.log('You have ' + age + ' years old, you have a child discount!!')
}

if(isSenior){
    console.log('You have ' + age + ' years old, you have a senior discount!!')
}

console.log(isChild);
console.log(isSenior);