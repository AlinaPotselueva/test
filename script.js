'use strict';

a = 5;
console.log(a);
/*var number = 5;
var string = 'Hello';
var symbol = Symbol();
var boolean = true;
null;
underfined;
var obj = {};*/

let person = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(person["name"]);
let arr = ['plum.png', 'orange.jpg','apple.bmp'];
console.log(arr[0]);
//alert("Hello World");
/*let answer = confirm("Are you here?");
console.log(answer);*/
// let answer = +prompt("Есть ли вам 18?", "Да");
// console.log(typeof(answer));
// console.log("arr" + " - object");
// console.log(4 + " - object");
let incr = 10,
    decr = 10;


console.log(incr++);
console.log(decr--);
console.log(incr);

console.log(5%2);
console.log('2' === 2);

let isChecked = true,
    isClose = false;
    console.log(isChecked || !isClose);