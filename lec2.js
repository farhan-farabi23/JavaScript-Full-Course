console.log("Lecture 2 : Practice");

//single line comment
/* This is a
multi line comment */

//Arithmetic Operators
let a = 5;
let b = 2;
console.log("a+b = ",a + b); //Addition
console.log("a-b = ",a - b); //Subtraction
console.log("a*b = ",a * b); //Multiplication
console.log("a/b = ",a / b); //Division
console.log("a%b = ",a % b); //Modulus
console.log("a**b = ",a ** b); //Exponentiation

//Unary Operators
//Post-Increment and Post-Decrement
a++,
console.log("a++ = ",a);
b--;
console.log("b-- = ",b); 

//Pre-Increment and Pre-Decrement
++a;
console.log("++a = ",a);
--b;
console.log("--b = ",b);

//Assignment Operators
let c = 10;
console.log("c = ",c); //Assignment
c += 5;
console.log("c += 5 = ",c); //Addition Assignment
c -= 3;
console.log("c -= 3 = ",c); //Subtraction Assignment
c *= 2;
console.log("c *= 2 = ",c); //Multiplication Assignment
c /= 4;
console.log("c /= 4 = ",c); //Division Assignment
c %= 3;
console.log("c %= 3 = ",c); //Modulus Assignment

//Comparison Operators
let d = 10;
let e = 20;
console.log("d == e : ",d == e);
console.log("d != e : ",d != e);
console.log("d < e : ",d < e);
console.log("d > e : ",d > e);
console.log("d <= e : ",d <= e);
console.log("d >= e : ",d >= e);

let f = "10";
let g = 10;
console.log("f === g : ",f === g); //Strict Equality
console.log("f !== g : ",f !== g); //Strict Inequality
