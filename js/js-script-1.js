
/* /* const apples = 47;
const grapes = 135;
const total = apples + grapes; */

/* const result = grapes - apples;
console.log(total);
console.log(result);
 */
/* let students = 100;
students += 50;
console.log("Students =", students) */

/* const result1 = 108 + 223 - 2 * 5;
console.log(result1); */

/* const value = 27.4

console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value));
 */
/* const companyName = 'Cyber Systems';
const repairBots = 150;
const defenseBots = 50;
let message
message = `${companyName} has ${repairBots+defenseBots} bots in stock`

console.log(message) */

let weight = '88,3';
let height = '1.75';

if (weight.includes(',')) {
    weight = weight.replace(',', '.') 
}
if (height.includes(',')) {
    height = height.replace(',', '.')
}

const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2);
/* const bmi = parseFloat(weight) / Math.pow(parseFloat(height), 2); */



console.log(bmi.toFixed(1))

//28.8