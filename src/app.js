import multiply, { add, square} from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';


console.log('App.js is running!');

console.log(add(3, 6));
console.log(square(9));
console.log(multiply(9, 6));

console.log(isAdult(15));
console.log(canDrink(21));
console.log('isSenior', isSenior(66));
