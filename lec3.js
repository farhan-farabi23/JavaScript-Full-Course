// console.log("Lecture 3 : Practice");

// //Loops
// //For Loop
// for(let i = 1; i <= 5; i++){
//     console.log("Farabi");
// }


//Calculate the sum of first n natural numbers
// let n = prompt("Enter a number: ");
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum += i;
// }
// console.log("Sum of first", n, "natural numbers is: ", sum);


//while loop
// let i = 1;
// while(i<=n){
//     sum += i;
//     i ++;
// }
// console.log("Sum of first", n, "natural numbers is: ", sum);

//do while loop
// let i = 1;
// sum = 0;
// do{
//     sum+= i;
//     i++;
// }while(i<=10);
// console.log("Sum of first 10 natural numbers is: ", sum);

//for of loop
// let str = "Farhan Farabi";
// let size = 0;
// for(let i of str){
//     console.log(i);
//     size++;
// }
// console.log("Size of the string is: ", size);

//for in loop
// let student = {
//     name : "Farhan",
//     age : 20,
//     marks : 9.5,
//     isPass : true,
// };

// for(let i in student){
//     console.log("Key:", i, "Value:", student[i]);
// }

//Practice (Print all even numbers from 0 to 100)

// for(let i = 0 ; i <= 100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Game number guessing
// let gameNum = 25;
// let userNum = prompt("Enter you number");
// console.log(userNum);

// while(userNum!=gameNum){
//     userNum = prompt("Guess again")
// }

// console.log("Yes");


//Strings

let str = "Farabi";
let str2 = "Farhan";

// Template Litrals in JS

let sen = `This is a templete literals`;
console.log(str.toLocaleUpperCase());

let prac = "      a asdasd da asd    ";
console.log(prac.trim());
console.log(str.slice(1,3));
console.log(str.concat(str2));
console.log(str.replace());
console.log(str.charAt(0));
