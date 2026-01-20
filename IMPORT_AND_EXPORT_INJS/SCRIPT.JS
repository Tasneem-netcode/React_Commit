let h1 = document.createElement('h1');

h1.textContent = "Hello, React! from js ";   

console.log(h1);
document.body.appendChild(h1);  

// console.log(a);
import a from './app.js';
console.log(a);

import {user,age,country} from './app.js';
console.log(user,age,country);