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


//Logical Operators
let h = false;
let i = true;
console.log("h && i : ",h && i); //Logical AND
console.log("h || i : ",h || i); //Logical OR
console.log("!h : ",!h); //Logical NOT


//Conditional Statements

let age = 18;
if(age >= 18){
    console.log("You are eligible for license.");
} else{
    console.log("You are not eligible for license.");
}


let mode = "red";
let color;
if (mode === "dark"){
    color = "black";
} else{
    color = "white";
}
console.log("Color is : ",color);


// Odd and Even Number Check
let j = 10;
if (j%2 === 0){
    console.log(j ,"j is even");
} else{
    console.log(j ,"j is odd");
}


if(age < 18){
    console.log("Junior");
} else if (age > 60){
    console.log("Senior");
} else{
    console.log("Adult");
}

//Ternary Operator
let result = age >= 18 ? "Eligible" : "Not Eligible";
console.log("Result is : ",result);

//Switch Statement
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
}


//Practice Questions 1
let num1 = prompt("Enter a number : ");
if (num1%5 === 0){
    console.log(num1, "is a multiple of 5");
} else{
    console.log(num1, "is not a multiple of 5");
}

//Practice Questions 2
let marks = prompt("Enter your marks : ");
if(marks >= 80 && marks <= 100){
    console.log("Grade : A");
} else if(marks >= 70 && marks < 80){
    console.log("Grade : B");
}else if(marks >= 60 && marks < 70){
    console.log("Grade : C");
} else if(marks >= 50 && marks < 60){
    console.log("Grade : D");
} else if(marks >= 0 && marks < 50){
    console.log("Grade : F");
} else{
    console.log("Invalid Marks");
}