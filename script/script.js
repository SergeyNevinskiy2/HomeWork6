'use strict'

//1
const example1 = Boolean(Number('10')) + 1;
console.log(example1, typeof example1); // 2 number 

//2
const example2 = 'sub ' + Number(false);
console.log(example2, typeof example2) // sub 0 string

//3
const example3 = 16 * ' 91 ';
console.log(example3, typeof example3) // 1456 number

//4
const example4 = true - 70;
console.log(example4,typeof example4) // -69 number

//5
const example5 = Number(1 + String(1)) + 1;
console.log(example5,typeof example5) // 12 number

