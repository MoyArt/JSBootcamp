/* With numbers we can have all the aritmetic operations at our disposal, 
    we can also store numbers in variables and then do the aritmetic operations using the variables
    Also its importan to remeber the operation order, so, you can use parentesis to have more
    control on your operations
*/

let age = 38
let dogYears = (age + 1) / 7;

console.log(dogYears);

/* CHALLENGE:
    You have to get the percentage of approval on a student note
    For example if the maxScore is 20 and your student have 18 answers correct, the percentage is 90% 
    Tip: You need 3 variables, student score, max score and percentage
*/

let studentScore = 15;
let maxScore = 20;
let percentage = (studentScore / maxScore) * 100;

console.log(percentage);

let percentageText = 'You got '+ percentage + '%';
console.log(percentageText);